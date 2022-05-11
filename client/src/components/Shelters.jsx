import React, { useState, useEffect } from 'react'
import { GetShelters } from '../services/PostServices'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Shelters = () => {
    const [shelters, setShelters] = useState([])
    useEffect(() => {
        const handleShelter = async () => {
            const data = await GetShelters()
            setShelters(data)
        }
        handleShelter()
    }, [])
console.log(shelters)
    return (
        <div className='shelter-page'>
                <div className='shelter-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT A SHELTER</h1>
                </div>
                <div className='shelter-wrapper'>
                    {shelters.map((shelter) => (                        
                        <div className='shelter-content' key={shelter.id}>
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

export default Shelters