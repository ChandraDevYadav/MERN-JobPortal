import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css"; // Import the CSS file

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
                setAnimationClass("fall-down");
            } else {
                setAnimationClass("fall-up");
                setTimeout(() => setIsVisible(false), 500); // Delay hiding to complete animation
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed right-8 bg-[#fd1616] text-white p-3 rounded-full shadow-lg transition-all transform ${animationClass} top-btn`}
                >
                    <FaArrowUp className="text-xl bx bx-fade-up" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
