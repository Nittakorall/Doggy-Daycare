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
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <img src={dog.img} alt={dog.name} />
    </div>
  )
}

export default DogInfo