import { useState } from "react";

export default function Block(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-black bg-opacity-80 text-gray-100 rounded-xl border-2 border-gray-100 text-center m-4 p-4"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                cursor: "pointer"
            }}>
            <div className="text-right">
                <div className={`inline-block rounded-lg ${props.team ? "bg-blue-800" : "bg-red-800"}`}>
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
                className={`block mt-1 text-sm text-gray-300 overflow-hidden`}
                style={{
                    maxWidth: isExpanded ? "80vw" : "200px",
                    opacity: isExpanded ? 1 : 0.7,
                    transition: "max-width 0.3s ease, opacity 0.3s ease",
                    textOverflow: "ellipsis",
                    whiteSpace: isExpanded ? "normal" : "nowrap",
                }}
            >
                {props.description}
            </span>
        </div>
    )
}