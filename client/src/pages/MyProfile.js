import React, { useState, useEffect } from "react"
import { GetProjects } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetCanines, GetFelines, GetUsersDetails } from '../services/PostServices'
import '../styles/App.css'
import LoginContext from "../LoginContext"
import Footer from '../components/Footer'
// import '../styles/myprofile.css'


const MyProfile = ( { user, loginStatus, handleLogOut } ) => {
    const [canines, setCanines] = useState([])
    const [felines, setFelines] = useState([])
    const [Currentuser, setUsers] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        const handleUsers = async () => {
            const data = await GetUsersDetails()
            setUsers(data)
        }
        const handleCanines = async () => {
            const data = await GetCanines()
            setCanines(data)
        }
        
        const handleFelines = async () => {
            const data = await GetFelines()
            setFelines(data)
        }

        handleUsers()
        handleCanines()
        handleFelines()
    }, [])

    return (user) ? (
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
             {canines.map((canine) => ( (canine.userId === user.id) ? (
                <div className='card' key={canine.id}>
                    <div className="project-canineer-wrapper">
                             <img id="myProject-canineer" src={canine.photo_url} alt='canine' />
                        <div className="canineProfile">
                            <div className="canineDelete"> 
                                {/* <DeleteCanineBtn id={canine.id} /> */}
                            </div> 
                            <div className="canineUpdate"> 
                                {/* <UpdateCanineBtn canine={canine} /> */}
                            </div>
                        </div> 
                    </div>
                    <div className="myCanine-content">
                        <h1 id="dogName">{canine.dogName}</h1>
                        <p id="dogName">{canine.breed}</p>
                    </div>
                </div> ) : <div></div>
             ))}

            {felines.map((feline) => ( (feline.userId === user.id) ? (
                <div className='card' key={feline.id}>
                    <div className="project-felineer-wrapper">
                             <img id="myProject-felineer" src={feline.photo_url} alt='feline' />
                        <div className="felineProfile">
                            <div className="felineDelete"> 
                                {/* <DeletefelineBtn id={feline.id} /> */}
                            </div> 
                            <div className="felineUpdate"> 
                                {/* <UpdatefelineBtn feline={feline} /> */}
                            </div>
                        </div> 
                    </div>
                    <div className="myfeline-content">
                        <h1 id="dogName">{feline.dogName}</h1>
                        <p id="dogName">{feline.breed}</p>
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
            <button style={{ margin:'10px 0' }}className="landingbutton" onClick={() => navigate('/login')}> Login</button>
            <button className="landingbuttonSignin" onClick={() => navigate('/')}>Back to Home</button>
        </div>
        
    )
}

export default MyProfile