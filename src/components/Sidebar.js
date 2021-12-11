import React from 'react'
import '../pages/index.css'
import {GoPrimitiveDot} from "react-icons/go"

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <div className="BuddyContainer">
                <p className="coach">Coach</p>
                <p className="buddy">B<span style={{color: 'black'}}>U</span>DDY</p>
                <p>Join you personal coach in your
                    personal as well as overall development</p>
            </div>
        </div>
    )
}

export default Sidebar
