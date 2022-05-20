import React, { useState, useEffect, useParams } from 'react'
import { GetShelters } from '../services/PostServices'
import { Link } from 'react-router-dom'
import AddShelter from './AddShelter'
import DeleteShelter from './DeleteShelter'
import EditShelter from './EditShelter'

const SheltersNEW = () => {
    // const {id} = useParams()
    const [shelters, setShelters] = useState([])
    useEffect(() => {
        const handleShelter = async () => {
            const data = await GetShelters()
            setShelters(data)
        }
        handleShelter()
    }, [])


console.log("shelters", shelters)

let sortedShelters = shelters.sort(function(a, b){
    let x = a.shelterName.toLowerCase()
    let y = b.shelterName.toLowerCase()
    if(x < y) {return -1}
    if(x > y) {return 1}
    return 0
})
console.log(sortedShelters)
    return (
        <div className='shelter-page'>
                <div className='shelter-title'>
               
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A SHELTER</h1>
                </div>
                <div className='shelter-wrapper'>
                     {sortedShelters.map((shelter) => (                       
                        <div className='shelter-content' key={shelter.id}>
                            <Link to={`/shelters/${shelter.id}`} id={shelter.id}>{shelter.shelterName}</Link>
                            {/* <DeleteShelter id={shelter.id}/>
                            <EditShelter id={shelter.id}/> */}
                        </div>
                        ))}
                </div>
                <div className='add-shelter-form'>
                {/* <AddShelter /> */}
                </div>
            <footer>
            </footer>
        </div>
    ) 
}

export default SheltersNEW