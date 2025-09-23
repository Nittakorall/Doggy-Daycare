import { useLocation } from "react-router"
import './DogInfo.css'
import { useState, useEffect } from "react"
import noDogImage from '../assets/noDog.jpg'
import { useNavigate } from 'react-router'

function DogInfo() {

  const navigate = useNavigate();
  const [isRealImage, setIsRealImage] = useState(true)


  function handleLoad(e) {
    if (e.target.naturalHeight <= 1 || e.target.naturalWidth <= 1) {
      setIsRealImage(false);
    }
  }

  const location = useLocation();

  //check why it shows up in console twice
  console.log(location);

  const dog = location.state.dog;

  return (
    <>
      <div className="DogInfo">
        <h1>Here comes {dog.name}! </h1>
        <section id="photo"

          className="dog-background-info"
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
            <img src={noDogImage} alt="Happy Dog" id='image' />
          )}

        </section>
        <div id="all-info">
          <section id="dog-info">
            <h2>Hello from {dog.breed} {dog.name}!</h2>

            <p> {dog.name} is a {dog.age} years old {dog.sex} dog. {dog.name} {dog.present ? " is here at Doggy rigt now and is totally amazing!" : " is not at Doggy right now. But we would be happy to see her again!"}
              {!isRealImage ? ` But ${dog.name} is shy so we had to hide real photo` : ""}</p>
          </section>

          <section id="owner-info">
            <h2>About {dog.name}s owner:</h2>
            <p>Name: {dog.owner.name}</p>
            <p>Surname: {dog.owner.lastName}</p>
            <p>Phone number: {dog.owner.phoneNumber || `${dog.owner.name} didn't leave a number`}</p>
          </section>
        </div>
        <button id="to-start" onClick={() => navigate('/')}>Back to start</button>

      </div>
    </>
  )
}

export default DogInfo