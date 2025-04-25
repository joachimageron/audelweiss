import { useEffect, useState } from "react";

const useScrollTrigger = (offset: number = 300) => {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setTriggered(window.scrollY > offset);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);

    return triggered;
};

export default useScrollTrigger;
