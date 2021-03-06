import React, { useState, useEffect } from 'react'
import { GetCaninesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import DeleteCanine from './DeleteCanine'
// import AddAnimalButton from './AddCanineButton'

const CanineDetailsNEW = () => {
    console.log()
    const [caninesDetails, setCaninesDetails] = useState([])
    const {id} = useParams()
    // console.log(id)
    useEffect(() => {
        const handleCanine = async () => {
            const data = await GetCaninesDetails(id)
            setCaninesDetails(data)
            console.log(data)
        }
        handleCanine()
    }, [id])

    return (
        <div className='canine-page'>
                <div className='canine-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>{caninesDetails.shelter}</h1>
                </div>
                <div className='canine-wrapper'>                      
                        <div className='canine-content' key={caninesDetails.id}>
                            <h2>Name: {caninesDetails.dogName}</h2>
                            <h2>Breed: {caninesDetails.breed}</h2>
                            <h2>Age: {caninesDetails.age}</h2>
                            <div className="animal-photo">
                                <img src={caninesDetails.photo_url} alt=""></img>
                            </div>
                            <DeleteCanine />
                        </div>
                </div>
        </div> 
    
    )
}

export default CanineDetailsNEW