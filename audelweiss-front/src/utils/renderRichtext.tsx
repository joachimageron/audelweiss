import React from "react";

export function renderRichText(nodes: any[]) {
    if (!Array.isArray(nodes)) return null;

    return nodes.map((node, index) => {
        if (node.type === "paragraph") {
            return <p key={index} className="mb-[2.5rem]">{renderRichText(node.children)}</p>;
        }
        if (node.type === "list") {
            if (node.format === "unordered") {
                return <ul key={index} className="list-disc list-inside mb-[2.5rem]">{renderRichText(node.children)}</ul>;
            }
            if (node.format === "ordered") {
                return <ol key={index} className="list-decimal list-inside mb-[2.5rem]">{renderRichText(node.children)}</ol>;
            }
        }

        if (node.type === "list-item") {
            return <li key={index} className="mb-[1rem]">{renderRichText(node.children)}</li>;
        }

        if (node.type === "link") {
            return (
                <a key={index} href={node.url || "#"} className="text-secondary hover:underline">
                    {renderRichText(node.children)}
                </a>
            );
        }

        if (node.type === "text") {
            let text = node.text;
            if (node.bold) {
                text = <b>{text}</b>;
            }
            if (node.italic) {
                text = <i>{text}</i>;
            }
            if (node.underline) {
                text = <u>{text}</u>;
            }
            if (node.strikethrough) {
                text = <s>{text}</s>;
            }
            if (node.code) {
                text = <code className="bg-gray-100 rounded">{text}</code>;
            }
            return <React.Fragment key={index}>{text}</React.Fragment>;
        }

        return null;
    });
}
