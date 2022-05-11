import React from 'react'
import '../styles/landing.css'
import { useNavigate } from 'react-router-dom'

const Landing = (props) => {
    let navigate = useNavigate()
    
    return (
        <main className="landing-container">
            <div className='landing-leftside'></div>
            <div className='landing-rightside'>
                <div className='landing-content'>
                    <h1 className='landing-header'>Find and rescue your next furry friend with <span id='Project'>PetPursuit</span></h1>
                    <p className='landing-description' > Join PetPursuit and save your favorite adoptees in your account!</p> 
                </div>
                <div className='landing-button-wrapper'>
                    <div className='signupbutton'>
                        <button className='landingbutton' onClick={() => navigate('/register')}>Sign Up</button> 
                     </div>
                     <div className='signinbutton'>
                        <button className='landingbuttonSignin' onClick={() => navigate('/login')}>Log In</button>
                        <p className='backto-Signin'>Already a member?</p>
                    </div> 
                </div> 
            </div>
        </main>
    )
}



export default Landing