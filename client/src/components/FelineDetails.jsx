import React, { useState, useEffect } from 'react'
import { GetFelinesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import AddAnimalButton from './AddCanineButton'

const FelineDetails = (props) => {
    const [felinesDetails, setFelinesDetails] = useState([])
    const {id} = useParams()
    // console.log(id)
    useEffect(() => {
        const handlefeline = async () => {
            const data = await GetFelinesDetails(id)
            setFelinesDetails(data)
            console.log(data)
        }
        handlefeline()
    }, [id])

    return (
        <div className='feline-page'>
                <div className='feline-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>{felinesDetails.shelter}</h1>
                </div>
                <div className='feline-wrapper'>                      
                        <div className='feline-content' key={felinesDetails.id}>
                            <h2>{felinesDetails.catName}</h2>
                            <h2>Breed: {felinesDetails.breed}</h2>
                            <h2>Age: {felinesDetails.age}</h2>
                            <div className="animal-photo">
                                <img src={felinesDetails.photo_url} alt=""></img>
                                <AddAnimalButton user={props.user} felinesDetails={felinesDetails}/>
                            </div>
                        </div>
                </div>
            <footer>
                 <Footer />
            </footer>
        </div> 
    
    )
}

export default FelineDetails