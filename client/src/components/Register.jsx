import React, { useState, useContext } from 'react';
import AxiosInstance from '../AxiosInstance'
import {LoginContext} from '../LoginContext'

function Register() {

    const [formData, setFormData] = useState({
      email: '',
      first_name: '',
      last_name: '',
      username: '',
      password: '',
  })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    // Submit form
    async function handleSubmit(event) {
        event.preventDefault()
        await AxiosInstance.post('/users/create', {
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: formData.password,
        })
    // Then, log the newly made user in 
        .then((res) => {
            localStorage.setItem('username', formData.username)
            localStorage.setItem('user_id', res.data.id)
            AxiosInstance.post('token/obtain/', {
                username: formData.username,
                password: formData.password
            })
            .then(res => {
                AxiosInstance.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                return res
            })
        })
        .catch(error => console.error)

    }

    return (
        <div className='form signup-form'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                Email: <input type='email' name='email' placeholder='Email'
                    value={formData.email} onChange={handleChange} />
                First name: <input type='text'
                    name='first_name' placeholder='First Name'
                    value={formData.first_name} onChange={handleChange} />
                Last name: <input type='text'
                    name='last_name' placeholder='Last Name'
                    value={formData.last_name} onChange={handleChange} />
                Username: <input type='text' 
                    name='username' placeholder='Username'
                    value={formData.username} onChange={handleChange} />
                Password: <input type='password'
                    name='password' placeholder='MINIMUM 8 CHARACTERS'
                    value={formData.password} onChange={handleChange} />
                        
                <button type='submit'>Register</button>                
                
                <div className="form-footer">
                <p>Have an account already?</p>
                <a href='/login/'> Log-In </a>
                    </div>
            </form>
        </div>
    )
}
export default Register;
