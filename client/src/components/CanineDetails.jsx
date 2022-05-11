import React, { useState, useEffect } from 'react'
import { GetCaninesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

const CanineDetails = (props) => {
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
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>THIS IS A DOG</h1>
                </div>
                <div className='canine-wrapper'>                      
                        <div className='canine-content' key={caninesDetails.id}>
                            {/* <Link to={`/canines/${canine.id}`}>{canine.dogName}</Link> */}
                            <h3>{caninesDetails.dogName}</h3>
                        </div>
                </div>
            <footer>
                 <Footer />
            </footer>
        </div> 
    
    )
}

export default CanineDetails