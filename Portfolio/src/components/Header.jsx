import React from "react";
import Navigation from './Navigation';
import '../App.css'

const Header = () => {
    return (
        <div className="fixed top-0 left-0 bg-white w-full z-10">
            <header>
                <Navigation />
            </header>

        </div>
    )
}


export default Header;