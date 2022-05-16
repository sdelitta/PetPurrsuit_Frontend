import React, { useState, useEffect } from 'react'
import { GetCaninesDetails, GetFelinesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'

const AnimalDetails = (props) => {
    const [caninesDetails, setCaninesDetails] = useState([])
    const [felinesDetails, setFelinesDetails] = useState([])
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

    useEffect(() => {
        const handleFeline = async () => {
            const data = await GetFelinesDetails(id)
            setFelinesDetails(data)
            console.log(data)
        }
        handleFeline()
    }, [id])
    console.log(caninesDetails)

    return (
        <div className='canine-page'>
            <div className='canine-title'>
                <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>THIS IS A DOG</h1>
            </div>
            <div className='canine-wrapper'>                      
                {caninesDetails.map((canine) => (                        
                    <div className='canine-content' key={canine.id}>
                        <Link to={`/canines/${canine.id}`}>{canine.dogName}</Link>
                    </div>
                ))}
            </div>

            <div className='feline-page'>
                <div className='feline-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>THIS IS A CAT</h1>
                </div>
                <div className='feline-wrapper'> 
                    {felinesDetails.map((feline) => (                        
                        <div className='feline-content' key={feline.id}>
                            <Link to={`/felines/${feline.id}`}>{feline.catName}</Link>
                        </div>
                    ))}          
                </div>
            </div>
        </div>
    )

}

export default AnimalDetails