import React, { useState, useEffect } from 'react'
import { GetFelinesDetails } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'

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
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>THIS IS A CAT</h1>
                </div>
                <div className='feline-wrapper'>                      
                        <div className='feline-content' key={felinesDetails.id}>
                            {/* <Link to={`/felines/${feline.id}`}>{feline.dogName}</Link> */}
                            <h3>{felinesDetails.catName}</h3>
                        </div>
                </div>
            <footer>
                 <Footer />
            </footer>
        </div> 
    
    )
}

export default FelineDetails