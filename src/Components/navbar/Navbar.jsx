import React from 'react'
import {Link} from "react-router-dom"
import "../navbar/Navbar.css"
import img from "../logo.png"

export const Navbar = () => {
    return (
        <div>
            <>
                <header>
                    <div className='boxe1'>
                        <img src={img} alt='Logo' style={{ width: "5rem" }} />
                    </div>
                    <div className='boxe2'>
                        <p><Link to="/" class="button-68">
                            Home
                        </Link></p>
                        <p><Link to="/about" class="button-68"> About</Link></p>
                    </div>
                </header>
            </>
        </div>
    )
}

// export default Navbar
