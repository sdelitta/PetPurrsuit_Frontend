import React, {useState, useEffect} from 'react'
import { GetCanines } from '../services/PostServices'
import { Link, useParams } from 'react-router-dom'

function CanineList( props ) {
    const [canines, setCanines] = useState([])
    const {id} = useParams()
    // console.log(id)
    
    useEffect(() => {
        const handleCanine = async () => {
            const data = await GetCanines(id)
            setCanines(data)
            console.log(data)
        }
        handleCanine()
    }, [])

    let sortedCanines = canines.sort(function(a, b){
        let x = a.dogName.toLowerCase()
        let y = b.dogName.toLowerCase()
        if(x < y) {return -1}
        if(x > y) {return 1}
        return 0
    })
    console.log(sortedCanines)
  return (
    <div className='canine-page'>
        <div className='canine-title'>
            <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>List Of Adoptable Dogs</h1>
        </div>
        <div className='canine-wrapper'>                      
            {sortedCanines.map((canine) => (                        
                <div className='canine-content' key={canine.id}>
                    <Link to={`/canines/${canine.id}`}>{canine.dogName}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CanineList