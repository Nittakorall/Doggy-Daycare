import { useLocation } from "react-router"
import './DogInfo.css'

function DogInfo() {
  const location = useLocation();

  //check why it shows up in console twice
  console.log(location);

  const dog = location.state.dog;

  return (

    <div className="DogInfo">
      <h1>Here comes {dog.name}! </h1>
        <section id="photo">
        <img src={dog.img} alt={dog.name} />
        </section>
      <div id="all-info">
        <section id="dog-info">
          <h2>Hello from {dog.breed} {dog.name}!</h2>

          <p> {dog.name} is a {dog.age} years old {dog.sex} dog. {dog.name} {dog.present ? " is here at Doggy rigt now and is totally amazing!": " is not at Doggy right now. But we would be happy to see her again!"}</p>
        </section>
   
      <section id="owner-info">
        <h2>About {dog.name}s owner:</h2>
         <p>Name: {dog.owner.name}</p>
          <p>Surname: {dog.owner.lastName}</p>
          <p>Phone number: {dog.owner.phoneNumber || `${dog.owner.name} didn't leave a number`}</p>
      </section>
      </div>
    </div>
  )
}

export default DogInfo