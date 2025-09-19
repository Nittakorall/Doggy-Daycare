import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
function Dogs() {
    const XMasterKey = import.meta.env.VITE_JSONBIN_KEY;
//const XMasterKey = "$2a$10$3EFI2pdzfX7xpZkYBCjOrewUUWdup6WeJS.YpPKB4RBpouvjO90pS"
const [dogsList, setDogsList] = useState([]) 
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

const navigate = useNavigate();


useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68cd832fae596e708ff41859", {
        headers: {
            'X-Master-Key': XMasterKey
        }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDogsList(data.record.record)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
}, [])

if (loading) return <p>Loading...</p>
if (error) return <p>Error: {error}</p>
function NavigateToDogInfo(dog) {
    navigate('/dog_info', {state: {dog}})
    
}


  return (
   <>
       <h1>Our Dogs</h1>
       <ul>
        {dogsList.map(dog => (
            //check that each dog has a unique id
            <li key ={dog.id}>
                <h2>{dog.name}</h2>
                <p>Age: {dog.age}</p>
                <p>Breed: {dog.breed}</p>
            <button onClick={() => NavigateToDogInfo(dog)}>More info</button>
            </li>
        ))}
       </ul>       
   </>
  )
}



export default Dogs