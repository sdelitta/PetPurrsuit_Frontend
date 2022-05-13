import React, { useState, useEffect } from 'react'
import { GetStates } from '../services/PostServices'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const States = (props) => {
    const [states, setStates] = useState([])
    
    useEffect(() => {
        const handleState = async () => {
            const data = await GetStates()
            setStates(data)
        }
        handleState()
        console.log(props.user)
    }, [])

    useEffect(() => {

        console.log(props.user)
    }, [states])

    console.log(states)
    return (
        <div className='state-page'>
                <div className='state-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT YOUR STATE</h1>
                </div>
                <div className='state-wrapper'>
                    {states.map((state) => (                        
                        <div className='state-content' key={state.id}>
                            <Link to={`/states/${state.id}`}>{state.stateName}</Link>
                        </div>
                    ))}
                </div>
            <footer>
                 <Footer />
            </footer>
        </div>
    ) 
}

export default States