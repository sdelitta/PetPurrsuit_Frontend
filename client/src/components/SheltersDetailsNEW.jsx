import React, { useState, useEffect } from 'react'
import { GetSheltersDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import EditShelter from './EditShelter'
import DeleteShelter from './DeleteShelter'
import sheltersDetails from '../pages/ShelterDetails'

const SheltersDetailsNEW = (props) => {
    const [sheltersDetails, setSheltersDetails] = useState([])
    const {id} = useParams()
    // console.log(id)
    useEffect(() => {
        const handleShelter = async () => {
            const data = await GetSheltersDetails(id)
            setSheltersDetails(data)
            // console.log(data)
        }
        handleShelter()
    }, [id])
    // console.log(sheltersDetails)
    if (sheltersDetails.canines) return (
        <div className='shelter-page'>
                <div className='shelter-title'>
                <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>{sheltersDetails.shelterName}</h1>
                <EditShelter id={sheltersDetails.id}/>
                <DeleteShelter id={sheltersDetails.id}/>
                </div>
                <div className="shelter-details">
                    <a href={`${sheltersDetails.website}`} target="_blank" rel="noreferrer">Link to Shelter Website</a>
                </div>
                <div className='select-animal'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A POOCH</h1>
                </div>
                <div className='shelter-wrapper'>
                    {sheltersDetails.canines.map((canine) => (                        
                        <div className='shelter-content' key={canine.id}>
                            <Link to={`/canines/${canine.id}`}>{canine.dogName}</Link>
                        </div>
                    ))}
                </div>
                <div className='select-animal'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A CAT</h1>
                </div>
                <div className='shelter-wrapper'>
                    {sheltersDetails.felines.map((feline) => (                        
                        <div className='shelter-content' key={feline.id}>
                            <Link to={`/felines/${feline.id}`}>{feline.catName}</Link>
                        </div>
                    ))}
                </div>
        </div>
    ) 
}

export default SheltersDetailsNEW