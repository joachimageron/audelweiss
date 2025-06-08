"use client";

import useScrollTrigger from "@/src/hooks/useScrollTrigger";
import { ArrowTop } from "@/src/components/icons";

import { tv } from "tailwind-variants";

const styles = tv({
    slots: {
        buttonWrapper: "group hidden lg:block fixed bottom-[5rem] right-[5rem] z-50 p-[1rem] w-[4rem] h-[4rem] rounded-full bg-light-primary shadow-lg cursor-pointer transition-opacity duration-300",
        arrowIcon: "absolute left-[50%] top-[0] translate-x-[-50%] translate-y-[80%] w-[3rem] fill-primary transition-transform duration-300 group-hover:-translate-y-[-0.5rem] group-focus:-translate-y-[-0.5rem]",
    },
    variants: {
        visible: {
            true: {
                buttonWrapper: "opacity-100",
            },
            false: {
                buttonWrapper: "opacity-0 pointer-events-none",
            },
        },
    },
});

const { buttonWrapper, arrowIcon } = styles();

export default function ScrollToTopButton() {
    const isVisible = useScrollTrigger(300);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={buttonWrapper({ visible: isVisible })}
            aria-label="Revenir en haut de la page"
        >
            <ArrowTop className={arrowIcon()} />
        </button>
    );
}
