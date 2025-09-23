import React from 'react'
import { useNavigate } from 'react-router'
import './Start.css'
import dogImage from '../assets/dog2.jpg'
import { useLocation } from "react-router"

function Start() {
    const navigate = useNavigate();

    return (
        <>
            {/* Jag vet att man ska undvika div, men det ser inte ut som section */}
            <div id="start">
                <h1>Welcome to the Dog Daycare</h1>
            </div>
            <div id="main">
                <section id="about-us">
                    <section id="what-we-offer">
                        <h3>We take care of your dogs while you are at work!</h3>
                        <p>Our daycare is open from 7am to 6pm, Monday to Friday.</p>
                        <p>We provide a safe and fun environment for your furry friends.</p>
                        <p>Our experienced staff will ensure that your dog gets plenty of exercise and socialization.</p>
                    </section>
                    <section id="buttons">
                        <button onClick={() => navigate('/contact')}>Leave a dog</button>
                        <button onClick={() => navigate('/dogs')}>Our dogs</button>
                    </section>
                </section>
                <section id='image-section'>
                    {/*        <img src={dogImage} alt="Happy Dog" id='image'/> */}
                </section>


            </div>


        </>
    )
}

export default Start