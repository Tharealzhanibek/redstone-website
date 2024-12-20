import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import '/src/App.css';

const Menu = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false); // State to toggle navbar visibility
    const [isMobile, setIsMobile] = useState(false); // Detect if the screen is mobile

    // Detect screen size on mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Assume mobile if width < 768px
        };
        handleResize(); // Run on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            className={`flex items-center justify-between bgc-bl px-6 py-4 shadow-md sticky top-0 z-50`}
        >
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
            </div>

            {/* Toggle Button for Mobile */}
            {isMobile && (
                <button
                    onClick={() => setIsNavbarVisible(!isNavbarVisible)}
                    className="text-[#F5F5F5] font-minecraft sm:hidden"
                >
                    {isNavbarVisible ? 'Close' : 'Menu'}
                </button>
            )}

            {/* Navbar Links */}
            <nav
                className={`flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-[#F5F5F5] font-minecraft ${
                    isMobile
                        ? isNavbarVisible
                            ? 'flex'
                            : 'hidden'
                        : 'flex'
                }`}
            >
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
