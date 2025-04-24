import React, {useRef, useEffect} from "react";

export default function Back_Ground() {

    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            throw new Error("canvas要素の取得に失敗しました");
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.height = window.innerHeight;
        const resizeCanvas = () => {
            console.log("resizeCanvas");
            canvas.width = window.innerWidth;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let Vs = [];
        let Fs = [];
        const init = async() => {
            for (let i=1; i<=23; i++) {
                const objData = await loadObjFile(`/portfolio/object/飛行船${String(i).padStart(4, '0')}.obj`);
                Vs.push(objData.V);
                Fs.push(objData.F);
            }
            console.log(`長さ${Vs.length}`);
        }
        init();

        const Matrixs = [
            makeMatrix(//Camera
                {x: 0, y: -0.5, z: 5},
                {x: 0.1, y: 0, z: 0}, 1
            ),
            makeMatrix(//Monkey
                {x: 0, y: 0, z: 0},
                {x: 0, y: 0, z: 0}, 1
            ),
        ];

        let y = 0;
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY * 0.005;
        });
        let a = 0;
        const loop = setInterval(() => {
            if(Vs.length !== 23) return;
            a += 1;
            if(scrollY != y){
                y += (scrollY - y) * 0.02;
            }
            Matrixs[1] = makeMatrix(
                {x: 0, y: Math.sin(a*0.01)*0.1, z: 0},
                {x: 0, y: y+-0.5, z: 0}, 1
            );
            update(Matrixs, a%23);
        }, 1000/30);

        const update = (Matrixs, frame) => {
            clearCanvas(ctx);
            for(let f of Fs[frame]){
                for(let i=0; i<f.length; i++){
                    const j = (i+1) % f.length;

                    const v1 = mult1x4(mult1x4(Vs[frame][f[i]], Matrixs[1]), inverse4x4(Matrixs[0]));
                    const v2 = mult1x4(mult1x4(Vs[frame][f[j]], Matrixs[1]), inverse4x4(Matrixs[0]));

                    drawLine(ctx, view(v1).x, view(v1).y, view(v2).x, view(v2).y);
                }
            }
        }
        return () => {
            clearInterval(loop);
            window.removeEventListener('scroll', () => {});
            window.removeEventListener('resize', resizeCanvas);
        };
    })

    return (
        <div className="fixed z-0">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

function clearCanvas(ctx){
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#101010";
    ctx.fill();
}
function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1*70 + ctx.canvas.width/2, -1*y1*70 + ctx.canvas.height/2);
    ctx.lineTo(x2*70 + ctx.canvas.width/2, -1*y2*70 + ctx.canvas.height/2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.stroke();
}
async function loadObjFile(filePath) {
    const V = [];
    const F = [];
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
        }
        const objText = await response.text();

        const lines = objText.split('\n');
        for (const line of lines) {
            const parts = line.trim().split(/\s+/);
            if (parts[0] === 'v') {
                const x = parseFloat(parts[1]);
                const y = parseFloat(parts[2]);
                const z = parseFloat(parts[3]);
                const w = 1;
                V.push({ x, y, z, w });
            } else if (parts[0] === 'f') {
                const face = parts.slice(1).map(p => parseInt(p.split('/')[0], 10) - 1);
                F.push(face);
            }
        }
    } catch (error) {
        console.error("Error loading OBJ file:", error);
    }
    return { V, F };
}

function mult4x4(M1, M2) {
    const result = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                result[i][j] += M1[i][k] * M2[k][j];
            }
        }
    }
    return result;
}
function mult1x4(v, M) {
    return {
        x: M[0][0] * v.x + M[0][1] * v.y + M[0][2] * v.z + M[0][3] * v.w,
        y: M[1][0] * v.x + M[1][1] * v.y + M[1][2] * v.z + M[1][3] * v.w,
        z: M[2][0] * v.x + M[2][1] * v.y + M[2][2] * v.z + M[2][3] * v.w,
        w: M[3][0] * v.x + M[3][1] * v.y + M[3][2] * v.z + M[3][3] * v.w
    };
}
function inverse4x4(m) {

    let augmented = m.map((row, i) =>
        row.concat([0, 0, 0, 0].map((_, j) => (i === j ? 1 : 0)))
    );

    for (let i = 0; i < 4; i++) {
        let pivot = augmented[i][i];
        if (pivot === 0) {
            let swapRow = -1;
            for (let j = i + 1; j < 4; j++) {
                if (augmented[j][i] !== 0) {
                    swapRow = j;
                    break;
                }
            }
            if (swapRow === -1) {
                throw new Error("Matrix is singular and cannot be inverted.");
            }
            [augmented[i], augmented[swapRow]] = [augmented[swapRow], augmented[i]];
            pivot = augmented[i][i];
        }

        for (let j = 0; j < 8; j++) {
            augmented[i][j] /= pivot;
        }

        for (let k = 0; k < 4; k++) {
            if (k !== i) {
                let factor = augmented[k][i];
                for (let j = 0; j < 8; j++) {
                    augmented[k][j] -= factor * augmented[i][j];
                }
            }
        }
    }

    let inverse = augmented.map(row => row.slice(4, 8));
    return inverse;
    // return [
    //     [1, 0, 0, 0],
    //     [0, 1, 0, 0],
    //     [0, 0, 1, 0],
    //     [0, 0, 0, 1]
    // ];
}

function makeMatrix(p, r, s) {
    // 回転行列 (x軸)
    const Rx = [
        [1, 0, 0, 0],
        [0, Math.cos(r.x), -Math.sin(r.x), 0],
        [0, Math.sin(r.x), Math.cos(r.x), 0],
        [0, 0, 0, 1]
    ];

    // 回転行列 (y軸)
    const Ry = [
        [Math.cos(r.y), 0, Math.sin(r.y), 0],
        [0, 1, 0, 0],
        [-Math.sin(r.y), 0, Math.cos(r.y), 0],
        [0, 0, 0, 1]
    ];

    // 回転行列 (z軸)
    const Rz = [
        [Math.cos(r.z), -Math.sin(r.z), 0, 0],
        [Math.sin(r.z), Math.cos(r.z), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];

    // スケーリング行列
    const S = [
        [s, 0, 0, 0],
        [0, s, 0, 0],
        [0, 0, s, 0],
        [0, 0, 0, 1]
    ];

    // 平行移動行列
    const T = [
        [1, 0, 0, p.x],
        [0, 1, 0, p.y],
        [0, 0, 1, p.z],
        [0, 0, 0, 1]
    ];

    // 回転行列をx, y, zの順で適用し、スケーリングと平行移動を適用
    return mult4x4(T, mult4x4(Rz, mult4x4(Ry, mult4x4(Rx, S))));
}
function view(v){
    // return {x: v.x, y:v.y};
    if (v.z >= 0){
        return {x: v.x * 1000, y:v.y * 1000};
    }
    return {x: v.x * (1 / v.z * -10), y:v.y * (1 / v.z * -10)};
}