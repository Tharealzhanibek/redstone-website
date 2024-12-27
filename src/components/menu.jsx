import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import redstoneLogo from '/src/assets/redstone-name.png'
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
                <img src={redstoneLogo} alt="Logo" className="h-6 cursor-pointer" />
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
                className={`${
                    isMobile
                        ? `transition-transform duration-300 ease-in-out transform fixed top-0 right-0 h-full bg-[#1a1a1a] shadow-lg z-40 ${isNavbarVisible ? 'translate-x-0 w-[40%]' : 'translate-x-full w-[40%]'} font-minecraft`
                        : 'flex space-x-6 text-[#F5F5F5] font-minecraft'
                }`}
            >
                {isMobile && (
                    <button
                        onClick={() => setIsNavbarVisible(false)}
                        className="text-white color-r p-2 rounded-md m-4"
                    >
                        Close
                    </button>
                )}
                <ul className="text-white p-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex">
                    <li>
                        <Link to="/Home" className="hover:text-[#e57361] cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="/Team" className="hover:text-[#e57361] cursor-pointer">Team</Link>
                    </li>
                    <li>
                        <Link to="/Events" className="hover:text-[#e57361] cursor-pointer">Events</Link>
                    </li>
                    <li>
                        <Link to="/Awards" className="hover:text-[#e57361] cursor-pointer">Awards</Link>
                    </li>
                    <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeVC09RilnJa7YHRpivNDVXFq-ng5XmpKpJ9lLJ4bgFoVbY-w/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e57361] cursor-pointer"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
