import React, { useState, useEffect } from 'react'
import { GetStatesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import '../styles/shelter.css'
import AddShelter from './AddShelter'
import DeleteShelter from './DeleteShelter'
import EditShelter from './EditShelter'

const StatesDetails = (props) => {
    const [statesDetails, setStatesDetails] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        const handleState = async () => {
            const data = await GetStatesDetails(id)
            setStatesDetails(data)
            // console.log(data)
        }
        handleState()
    }, [id])
    // console.log(statesDetails)
    if (statesDetails.shelters) return (
        <div className='state-page'>
            <div className='shelter-title'>
                <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A {statesDetails.stateName.toUpperCase()} SHELTER</h1>
            </div>
            <div className='state-wrapper'>
                {statesDetails.shelters.map((shelter) => (                        
                    <div className='state-content' key={shelter.id}>
                        <div className="link-title">
                        <Link to={`/shelters/${shelter.id}`}>{shelter.shelterName}</Link>
                        </div>
                        {/* <div className='hidden'> */}
                            {/* <EditShelter id={shelter.id}/> */}
                            <DeleteShelter id={shelter.id}/>
                        {/* </div> */}
                    </div>
                ))}
            </div>
            <div className="add-form">
                <AddShelter id={id} />
            </div>
        </div>
    ) 
}

export default StatesDetails