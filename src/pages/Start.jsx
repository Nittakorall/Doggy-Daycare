import React from 'react'
import { useNavigate } from 'react-router'


function Start() {
const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to the Dog Daycare</h1>
            <section>
                <h3>We take care of your dogs while you are at work!</h3>
                <p>Our daycare is open from 7am to 6pm, Monday to Friday.</p>
                <p>We provide a safe and fun environment for your furry friends.</p>
                <p>Our experienced staff will ensure that your dog gets plenty of exercise and socialization.</p>
            </section>
            <section>
                <image src="dog_image_url" alt="Happy Dog" />
            </section>

            <button onClick={() => navigate('/contact')}>Leave a dog</button>
            <button onClick={() => navigate('/dogs')}>Our dogs</button>

         
                
            
        </>
    )
}

export default Start