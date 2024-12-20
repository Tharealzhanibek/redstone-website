import React from "react";
import youtube from '/src/assets/youtube.png'
import instagram from '/src/assets/instagram.png'
import gmail from '/src/assets/gmail.png'
const LowBar = () => {
    return (
        <div className="flex flex-horizontal justify-center space-x-40 p-[12px] ">
            <a href="https://www.youtube.com/@RedStoneFIRSTKZ" target="_blank" rel="noopener noreferrer">
                <img src={youtube} className="h-6" alt="YouTube" />
            </a>
            <a href="https://www.instagram.com/redstone_ftckz/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="h-6"></img>
            </a>
            <img src={gmail} className="h-6"></img>
        </div>
    )
}

export default LowBar