import React, {useState, useEffect} from 'react'
import { GetFelines } from '../services/PostServices'
import { Link } from 'react-router-dom'

function FelineList() {
    const [felines, setFelines] = useState([])
    
    useEffect(() => {
        const handleFeline = async () => {
            const data = await GetFelines()
            setFelines(data)
            console.log(data)
        }
        handleFeline()
    }, [])

    let sortedFelines = felines.sort(function(a, b){
        let x = a.catName.toLowerCase()
        let y = b.catName.toLowerCase()
        if(x < y) {return -1}
        if(x > y) {return 1}
        return 0
    })
  return (
    <div className='feline-page'>
        <div className='feline-title'>
            <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>List Of Adoptable Cats</h1>
        </div>
        <div className='feline-wrapper'>                      
            {felines.map((feline) => (                        
                <div className='feline-content' key={feline.id}>
                    <Link to={`/felines/${feline.id}`}>{feline.catName}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FelineList