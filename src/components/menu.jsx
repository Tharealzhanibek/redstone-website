import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import '/src/App.css'

const Menu = () => {    
    return (    
    <header className="flex items-center justify-between bg-[#1C1C1C] px-6 py-4 shadow-md sticky top-0 z-50">
        
        <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 cursor-pointer" />
        </div>

        <nav className="flex space-x-6 text-[#F5F5F5] font-minecraft">
            <Link to="/Home" className="hover:text-[#d33b2b] cursor-pointer">
            Home
            </Link>
            <Link to="/Team" className="hover:text-[#d33b2b] cursor-pointer">
            Team
            </Link>
            <Link to="/Events" className="hover:text-[#d33b2b] cursor-pointer">
            Events
            </Link>
            <Link to="/Awards" className="hover:text-[#d33b2b] cursor-pointer">
            Awards
            </Link>
            <Link to="/Contact" className="hover:text-[#d33b2b] cursor-pointer">
            Contact Us
            </Link>
        </nav>
    </header>
    )
}

export default Menu