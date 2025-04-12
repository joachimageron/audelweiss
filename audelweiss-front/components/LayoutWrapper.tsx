"use client";

import { useState, useEffect } from "react";
import Header from "@/components/baseElements/Header";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Vérifie si on est en mobile au premier rendu
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);      // mobile --> >1204px
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);


    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false); // scroll down
            } else {
                setShowHeader(true); // scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobile]);

    return (
        <>
            <Header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`} />
            <main className="lg:pt-0 pt-[7.4rem]">
                {children}
            </main>
            <footer></footer>
        </>
    );
}
