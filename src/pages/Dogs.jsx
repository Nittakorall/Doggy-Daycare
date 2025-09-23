import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import './Dogs.css'
import './DogCardComponent.jsx'
import DogCardComponent from "./DogCardComponent.jsx";


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

    if (loading) return <p id="loading">Loading...</p>
    if (error) return <p>Error: {error}</p>



    function NavigateToDogInfo(dog) {
        navigate('/dog_info', { state: { dog } })

    }


    return (
        <>
            <h1>Our Dogs</h1>
             <button id="to-start" onClick={() => navigate('/')}>Back to start</button>
            <ul>
                {dogsList
                    .slice()
                    .sort((a, b) => b.present - a.present)
                    .map(dog => (
                        <DogCardComponent key={dog.id} dog={dog} onMoreInfo={NavigateToDogInfo}></DogCardComponent>
                    ))}


                {/* Ask David
                            <div className="dog-background"
                                style={
                                    dog.img ? {
                                        backgroundImage: `url(${dog.img})`
                                    }
                                        : {}
                                }
                            >{!dog.img && (
                                <div id="missing-img">
                                    <p>Photo of {dog.name} will be here soon!</p>
                                </div>
                            )}


                            </div>
                            */}



            </ul>
        </>
    )
}



export default Dogs