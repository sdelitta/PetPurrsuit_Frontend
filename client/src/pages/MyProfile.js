import React, { useState, useEffect } from "react"
import { GetProjects } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetCanines, GetFelines } from '../services/PostServices'
import '../styles/App.css'
import Footer from '../components/Footer'
import '../styles/myprofile.css'


const MyProfile = ( {user, authenticated} ) => {
    const [canines, setCanines] = useState([])
    const [felines, setFelines] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        const handleCanines = async () => {
            const data = await GetCanines()
            setCanines(data)
        }
        
        const handleFelines = async () => {
            const data = await GetFelines()
            setFelines(data)
        }

        handleCanines()
        handleFelines()
    }, [])

    console.log(canines[0])
    return (user && authenticated) ? (
       <>
        <div className="thumbnail-bg"></div>
        <div className="user">
            <div className="user-profile"></div>
            <div className="user-stats">
                <div className="userName">
                    <p key={user.username}>{user.username}</p>
                </div>
                <div className="userAnimals">
                    <p>Canines <strong>8</strong></p>
                    <p>Felines <strong>3,254,546</strong></p>
                </div>
            </div>
        </div>
        <div className="myProfile">
             {canines.map((post) => ( (post.userId === user.id) ? (
                <div className='card' key={post.id}>
                    <div className="project-poster-wrapper">
                             <img id="myProject-poster" src={post.image} alt='post' />
                        <div className="catProfile">
                            <div className="catDelete"> 
                                {/* <DeleteCanineBtn id={post.id} /> */}
                            </div> 
                            <div className="catUpdate"> 
                                {/* <UpdateCanineBtn post={post} /> */}
                            </div>
                        </div> 
                    </div>
                    <div className="myCanine-content">
                        <h1 id="dogName">{post.dogName}</h1>
                        <p id="dogName">{post.breed}</p>
                    </div>
                </div> ) : <div></div>
             ))}
             <Footer />
        </div>
        </>
    ) : (
        <div className="must-signin" 
    style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'200px'}}>
        <h3 
        style={{  fontSize:'36px' }}className="signin-header">
            Ya gotta login to do that, Bub 💩 </h3>
            <button style={{ margin:'10px 0' }}className="landingbutton" onClick={() => navigate('/signin')}> Sign in</button>
            <button className="landingbuttonSignin" onClick={() => navigate('/')}>Back to Home</button>
        </div>
        
    )
}

export default MyProfile