import React, { useState, useEffect } from 'react'
import { GetStates } from '../services/PostServices'
import { Link } from 'react-router-dom'
import '../styles/list.css'

const States = () => {
    const [states, setStates] = useState([])
    useEffect(() => {
        const handleState = async () => {
            const data = await GetStates()
            setStates(data)
        }
        handleState()
        // console.log(props.user)
    }, [])

    useEffect(() => {

        // console.log(props.user)
    }, [states])
    let sortedStates = states.sort(function(a, b){
        let x = a.stateName.toLowerCase()
        let y = b.stateName.toLowerCase()
        if(x < y) {return -1}
        if(x > y) {return 1}
        return 0
    })
    console.log(sortedStates)
    return (
        <div className='state-page'>
                <div className='state-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>SELECT YOUR STATE</h1>
                </div>
                <div className='state1-wrapper'>
                    {sortedStates.map((state) => (                        
                        <div className='state-content' key={state.id}>
                            <Link to={`/states/${state.id}`}>{state.stateName}</Link>
                        </div>
                    ))}
                </div>
            <footer>
            </footer>
        </div>
    ) 
}

export default States