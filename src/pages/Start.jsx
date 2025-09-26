import React from 'react'
import { useNavigate } from 'react-router'
import './Start.css'


function Start() {
    const navigate = useNavigate();

    return (
        <>
            <div id="start">
                <h1>Welcome to the Doggy Daycare</h1>
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

                        <button onClick={() => navigate('/dogs')}>Our dogs</button>
                    </section>
                </section>
                <section id='image-section'>
                </section>


            </div>


        </>
    )
}

export default Start