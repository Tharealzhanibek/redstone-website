import React from "react";
import youtube from '/src/assets/youtube.png'
import instagram from '/src/assets/instagram.png'
import gmail from '/src/assets/gmail.png'
const LowBar = () => {
    return (
        <div className="flex flex-horizontal justify-center space-x-40 p-[12px] ">
            <img src={youtube} className="h-6"></img>
            <img src={instagram} className="h-6"></img>
            <img src={gmail} className="h-6"></img>
        </div>
    )
}

export default LowBar