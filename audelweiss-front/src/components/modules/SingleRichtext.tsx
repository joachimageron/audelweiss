"use client";

import { ComponentBlocksSingleRichtext } from "@/src/types/generated";
import { renderRichText } from "@/src/utils/renderRichtext";

import { tv } from "tailwind-variants";

type Props = {
    block: ComponentBlocksSingleRichtext;
    className?: string;
};

const styles = tv({
    slots: {
        richtextWrapper: "inner-wrap max-w-[90rem]! text-[1.7rem]",
    },
});


const { richtextWrapper } = styles();

const SingleRichtext = ({ block, className = "" }: Props) => {
    return (
        <section className={richtextWrapper() + className}>
            {renderRichText(block.richtextContent)}
        </section>
    );
};

export default SingleRichtext;