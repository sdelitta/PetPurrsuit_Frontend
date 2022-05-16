import React, {useState, useEffect} from 'react'
import { GetCanines } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'

function CanineList() {
    const [canines, setCanines] = useState([])
    // const {id} = useParams()
    // console.log(id)
    
    useEffect(() => {
        const handleCanine = async () => {
            const data = await GetCanines()
            setCanines(data)
            console.log(data)
        }
        handleCanine()
    }, [])

  return (
    <div className='canine-page'>
        <div className='canine-title'>
            <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>List Of Adoptable Dogs</h1>
        </div>
        <div className='canine-wrapper'>                      
            {canines.map((canine) => (                        
                <div className='canine-content' key={canine.id}>
                    <Link to={`/canines/${canine.id}`}>{canine.dogName}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CanineList