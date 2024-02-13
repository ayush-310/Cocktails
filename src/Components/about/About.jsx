import React from 'react'
import "../about/About.css"
import { Navbar } from "../navbar/Navbar"

export const About = () => {
    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='row nn'>
                    <div className='about-section'>
                        <h2>About Us</h2>
                        <p className='xx'>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae repudiandae architecto qui adipisci in
                            officiis, aperiam sequi atque perferendis eos, autem
                            maiores nisi saepe quisquam hic odio consectetur
                            nobis veritatis quasi explicabo obcaecati doloremque?
                            Placeat ratione hic aspernatur error blanditiis?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

// export default About
