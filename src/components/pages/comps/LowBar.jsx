import React, { useState, useEffect } from "react";
import youtube from '/src/assets/youtube.png';
import instagram from '/src/assets/instagram.png';
import gmail from '/src/assets/gmail.png';

const LowBar = () => {
    const [isBottom, setIsBottom] = useState(false);

    const checkScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= documentHeight) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    if (!isBottom) {
        return null;  // Don't render LowBar if the user is not at the bottom
    }

    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-center space-x-40 p-[12px] bg-[#0E0E0E] mt-12">
            <a href="https://www.youtube.com/@RedStoneFIRSTKZ" target="_blank" rel="noopener noreferrer">
                <img src={youtube} className="h-6" alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/redstone_ftckz/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="h-6" alt="Instagram" />
            </a>
        </div>
    );
};

export default LowBar;
