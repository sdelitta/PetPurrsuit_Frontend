import React, { useState, useEffect } from 'react'
import { GetCaninesDetails, GetFelinesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

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

    if (caninesDetails) return (
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
     
    if (felinesDetails) return (
        <div className='feline-page'>
                <div className='feline-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>THIS IS A CAT</h1>
                </div>
                <div className='feline-wrapper'>           
                        <div className='feline-content' key={felinesDetails.id}>
                            
                            
                            {/* <Link to={`/felines/${feline.id}`}>{feline.catName}</Link> */}
                            <h3>{felinesDetails.catName}</h3>
                        </div>
                </div>
            <footer>
                 <Footer />
            </footer>
        </div>
    )

}

export default AnimalDetails