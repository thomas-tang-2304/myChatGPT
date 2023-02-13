import { useState, useEffect } from "react";

const useScrollPosition = (element: any) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(element.pageYOffset);
        }
        element.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => element.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

export default useScrollPosition;