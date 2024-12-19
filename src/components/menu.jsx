import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import '/src/App.css';

const Menu = () => {
    const [showNavbar, setShowNavbar] = useState(true); // State to toggle navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If scrolling down, hide navbar; if scrolling up, show navbar
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY); // Update the last scroll position
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Effect depends on `lastScrollY`

    return (
        <header
            className={`flex items-center justify-between bgc-bl px-6 py-4 shadow-md sticky top-0 z-50 transition-transform duration-300 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
            </div>

            <nav className="flex space-x-6 text-[#F5F5F5] font-minecraft">
                <Link to="/Home" className="hover:text-[#e57361] cursor-pointer">
                    Home
                </Link>
                <Link to="/Team" className="hover:text-[#e57361] cursor-pointer">
                    Team
                </Link>
                <Link to="/Events" className="hover:text-[#e57361] cursor-pointer">
                    Events
                </Link>
                <Link to="/Awards" className="hover:text-[#e57361] cursor-pointer">
                    Awards
                </Link>
                <Link to="/Contact" className="hover:text-[#e57361] cursor-pointer">
                    Contact Us
                </Link>
            </nav>
        </header>
    );
};

export default Menu;
