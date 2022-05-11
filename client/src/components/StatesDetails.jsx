import React, { useState, useEffect } from 'react'
import { GetStatesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

const StatesDetails = (props) => {
    const [statesDetails, setStatesDetails] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        const handleState = async () => {
            const data = await GetStatesDetails(id)
            setStatesDetails(data)
            console.log(data)
        }
        handleState()
    }, [id])
    // console.log(statesDetails)
    if (statesDetails.shelters) return (
        <div className='state-page'>
                <div className='state-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A SHELTER</h1>
                </div>
                <div className='state-wrapper'>
                    {statesDetails.shelters.map((shelter) => (                        
                        <div className='state-content' key={shelter.id}>
                            <Link to={`/shelters/${shelter.id}`}>{shelter.shelterName}</Link>
                        </div>
                    ))}
                </div>
            <footer>
                 <Footer />
            </footer>
        </div>
    ) 
}

export default StatesDetails