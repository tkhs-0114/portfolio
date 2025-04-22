import React, {useRef, useEffect} from "react";

function Back_Ground() {

    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            throw new Error("canvas要素の取得に失敗しました");
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#101010";
        ctx.fill();

    })

    return (
        <div className="fixed z-0">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Back_Ground;