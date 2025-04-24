import { useState } from "react";

export default function Block(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const Text = (text) => {
        const parts = text.split(/(<br>|\*\*.*?\*\*)/g);
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
            return part;
        });
    };

    return (
        <div
            className={`bg-black bg-opacity-80 text-gray-100 rounded-xl border-2 border-gray-100 text-center m-4 p-4 ${isExpanded ? "h-auto" : "h-40"} transition-all duration-300 ${isExpanded ? "mx-96" : ""}`}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                cursor: "pointer",
                overflow: isExpanded ? "visible" : "hidden",
            }}>
            <div className="text-right">
                <div className={`inline-block rounded-lg text-sm px-1 ${props.team ? "bg-blue-800" : "bg-red-800"}`}>
                    {props.team ? "チーム" : "個人"}
                </div>
            </div>
            <span className="text-xl">{props.title}</span>

            <hr />
            <div className="text-left">
                {props.stack && props.stack.map((s) => {
                    return (
                        <img
                            key={s}
                            className="aspect-square w-10 inline-block bg-gray-500 bg-opacity-50 rounded-full p-2 my-2"
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
                    transition: "width 0.3s ease, opacity 0.3s ease",
                    textOverflow: "ellipsis",
                    whiteSpace: isExpanded ? "normal" : "nowrap",
                }}
            >
                {Text(props.description)}
            </span>
        </div>
    )
}