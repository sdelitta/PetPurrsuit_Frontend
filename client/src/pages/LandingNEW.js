import React from 'react'
import '../styles/landing.css'
import { useNavigate } from 'react-router-dom'

const LandingNEW = (props) => {
    let navigate = useNavigate()
    
    return (
        <main className="landing-container">
            <div className='landing-leftside'></div>
            <div className='landing-rightside'>
                <div className='landing-content'>
                    <h1 className='landing-header'>Upload your furry adoptees with <span id='Project'>PetPurrsuit</span></h1>
                    <p className='landing-description' > Welcome to PetPurrsuit where animal rescue is made easy!</p> 
                </div>
                <div className='landing-button-wrapper'>
                    <div className='signupbutton'>
                        <button className='landingbutton' onClick={() => navigate('/states')}>Add Shelter</button> 
                     </div>
                     <div className='signinbutton'>
                        <button className='landingbuttonSignin' onClick={() => navigate('/shelters')}>Add Furball</button>
                        <p className='backto-Signin'>Shelter Already Added?</p>
                    </div> 
                </div> 
            </div>
        </main>
    )
}



export default LandingNEW