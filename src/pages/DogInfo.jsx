import { useLocation } from "react-router"
import './DogInfo.css'

function DogInfo() {
  const location = useLocation();

  //check why it shows up in console twice
  console.log(location);

  const dog = location.state.dog;

  return (

    <div className="DogInfo">
      <h1>Dog Info Page</h1>
        <section id="photo">
        <img src={dog.img} alt={dog.name} />
        </section>
      <div id="all-info">
        <section id="dog-info">
          <h2>Hello from {dog.name}!</h2>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
        </section>
   
      <section id="owner-info">
        <h2>About {dog.name}s owner:</h2>
         <p>Name: {dog.owner.name}</p>
          <p>Surname: {dog.owner.lastName}</p>
          <p>Phone number: {dog.owner.phoneNumbers}</p>
      </section>
      </div>
    </div>
  )
}

export default DogInfo