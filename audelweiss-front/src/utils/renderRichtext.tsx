import React from "react";

import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";

const styles = tv({
    slots: {
        paragraphStyle: "mb-[2.5rem]",
        listOrderedStyle: "list-disc list-inside mb-[2.5rem]",
        listUnorderedStyle: "list-decimal list-inside mb-[2.5rem]",
        listItemStyle: "mb-[1rem]",
        linkStyle: "text-secondary hover:underline",
        codeStyle: "bg-gray-100 rounded",
        heading1Style: "mb-[2.2rem] text-[5rem] font-dm-sans text-primary",
        heading2Style: "mb-[1.5rem] text-[3rem] font-dm-sans text-primary",
        heading3Style: "mb-[1.2rem] text-[2.4rem] font-dm-sans text-primary",
    },
});

const { paragraphStyle, listOrderedStyle, listUnorderedStyle, listItemStyle, linkStyle, codeStyle, heading1Style, heading2Style, heading3Style } = styles();

export function renderRichText(nodes: any[]) {
    if (!Array.isArray(nodes)) return null;

    return nodes.map((node, index) => {
        if (node.type === "paragraph") {
            return <p key={index} className={paragraphStyle()}>{renderRichText(node.children)}</p>;
        }
        if (node.type === "list") {
            if (node.format === "unordered") {
                return <ul key={index} className={listOrderedStyle()}>{renderRichText(node.children)}</ul>;
            }
            if (node.format === "ordered") {
                return <ol key={index} className={listUnorderedStyle()}>{renderRichText(node.children)}</ol>;
            }
        }

        if (node.type === "list-item") {
            return <li key={index} className={listItemStyle()}>{renderRichText(node.children)}</li>;
        }

        if (node.type === "link") {
            return (
                <a key={index} href={node.url || "#"} className={linkStyle()}>
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
                text = <code className={codeStyle()}>{text}</code>;
            }
            return <React.Fragment key={index}>{text}</React.Fragment>;
        }

        if (node.type === "heading") {
            const level = node.level || 2;
            let headingClass = "";

            switch (level) {
                case 1:
                    headingClass = heading1Style();
                    break;
                case 2:
                    headingClass = heading2Style();
                    break;
                case 3:
                    headingClass = heading3Style();
                    break;
                default:
                    headingClass = heading2Style();
            }

            return (
                <CustomTitle key={index} level={level} className={headingClass}>
                    {renderRichText(node.children)}
                </CustomTitle>
            );
        }

        return null;
    });
}
