"use client";

import { ComponentBlocksQuote } from "@/src/types/generated";

import { tv } from "tailwind-variants";

type Props = {
    block: ComponentBlocksQuote;
    className?: string;
};

const styles = tv({
    slots: {
        quoteText: "inner-wrap py-[2rem] font-allura lg:text-[4.4rem] text-[3rem] leading-[1] text-secondary text-center",
    },
});

const { quoteText } = styles();

const Quote = ({ block, className = "" }: Props) => {
    return (
        <section className={quoteText() + className}>
            <p>{block.text}</p>
        </section>
    );
};

export default Quote;