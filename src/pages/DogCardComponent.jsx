import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import './Dogs.css'
import noDogImage from '../assets/noDog.jpg'


function DogCardComponent({dog, onMoreInfo}) {
    const [isRealImage, setIsRealImage] = useState(true)


    function handleLoad(e) {
        if (e.target.naturalHeight <= 1 || e.target.naturalWidth <= 1) {
            setIsRealImage(false);
        }
    }


    return (
        
            <section className="dog-card">

                <li key={dog.id}>

                    <div
                        className="dog-background"
                        style={isRealImage ? { backgroundImage: `url(${dog.img})` } : {}}
                    >
                        <img
                            src={dog.img}
                            alt=""
                            style={{ display: "none" }}
                            onError={() => setIsRealImage(false)}
                            onLoad={handleLoad}
                        />
                        {!isRealImage && (
                            <div className="missing-img">
                            <img src={noDogImage} alt="Happy Dog" id='image'/> 
                                <p>Real photo of {dog.name} will be here soon!</p>
                            </div>
                        )}
                    </div>


                    <h2>{dog.name}</h2>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <div id="more-info-button">
                        <button onClick={() => onMoreInfo(dog)}>More info</button>
                    </div>
                </li>
            </section>
        
    )

}
export default DogCardComponent