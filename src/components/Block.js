import { useState } from "react";

export default function Block(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const Text = (text) => {
        const parts = text.split(/(<br>|\*\*.*?\*\*|\[.*?\]\(.*?\)|\{.*?\})/g);
        return parts.map((part, index) => {
            if (part?.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={index} className="text-yellow-300">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            if (part === "<br>") {
                return <br key={index} />;
            }
            if (part?.startsWith("[") && part.includes("](") && part.endsWith(")")) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    const [, text, url] = match;
                    return (
                        <a key={index} href={url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                            {text}
                        </a>
                    );
                }
            }
            if (part?.startsWith("{") && part.endsWith("}")) {
                const imageUrl = part.slice(1, -1);
                if (/\.(png|jpg|jpeg|gif)$/i.test(imageUrl)) {
                    console.log(imageUrl);
                    return (
                        <img
                            key={index}
                            src={imageUrl}
                            alt="Embedded content"
                            className="inline-block max-w-full max-h-40 my-2 rounded-lg cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                const modal = document.createElement("div");
                                modal.style.position = "fixed";
                                modal.style.top = "0";
                                modal.style.left = "0";
                                modal.style.width = "100vw";
                                modal.style.height = "100vh";
                                modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                                modal.style.display = "flex";
                                modal.style.justifyContent = "center";
                                modal.style.alignItems = "center";
                                modal.style.zIndex = "1000";
                                modal.onclick = () => document.body.removeChild(modal);

                                const enlargedImg = document.createElement("img");
                                enlargedImg.src = imageUrl;
                                enlargedImg.alt = "Enlarged content";
                                enlargedImg.style.maxWidth = "90%";
                                enlargedImg.style.maxHeight = "90%";
                                enlargedImg.style.borderRadius = "10px";
                                enlargedImg.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.5)";
                                modal.appendChild(enlargedImg);

                                document.body.appendChild(modal);
                            }}
                        />
                    );
                }
            }
            return part;
        });
    };

    return (
        <div
            className={`bg-black bg-opacity-80 text-gray-100 rounded-xl border-2 ${props.pickup? "border-yellow-400" : "border-gray-100"} text-center m-4 p-4 ${isExpanded ? "h-auto" : "h-40"} transition-all duration-300 ${isExpanded ? "mx-96" : ""}`}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                cursor: "pointer",
                overflow: isExpanded ? "visible" : "hidden",
            }}>
            <div className="flex justify-between">
                <div className={`inline-block rounded-lg text-sm px-1 ${props.team ? "bg-blue-800" : "bg-red-800"}`}>
                    {props.team ? "チーム" : "個人"}
                </div>
                {props.pickup && <span className={`inline-block rounded-lg text-sm px-1 bg-yellow-500`}>！ピックアップ！</span>}
            </div>
            <span className="text-xl">{props.title}</span>

            <hr />
            <div className="text-left">
                {props.stack && props.stack.map((s) => {
                    return (
                        <img
                            key={s}
                            className={`aspect-square w-10 inline-block bg-gray-500 bg rounded-full p-2 my-2 ${isExpanded ? "opacity-90" : "opacity-50"}`}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s}/${s}-original.svg`}
                        ></img>
                    )
                })}
            </div>
            <span
                className={`block mt-1 text-sm text-gray-300 overflow-hidden text-left`}
                style={{
                    paddingLeft: isExpanded ? "20px" : "0px",
                    width: isExpanded ? "50vw" : "200px",
                    opacity: isExpanded ? 1 : 0.7,
                    transition: "width 0.7s ease, opacity 0.3s ease",
                    textOverflow: "ellipsis",
                    whiteSpace: isExpanded ? "normal" : "nowrap",
                }}
            >
                {Text(props.description)}
            </span>
        </div>
    )
}