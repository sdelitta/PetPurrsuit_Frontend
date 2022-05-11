import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import {LoginContext} from '../LoginContext'
import AxiosInstance from '../AxiosInstance'
import '../styles/login.css'

function Login() {

  const navigate = useNavigate()

  const {setLoginStatus} = useContext(LoginContext)
  const [login, setLogin] = useState({
      username: '',
      password: ''
  })

  const handleChange = (e) => {
      setLogin({...login, [e.target.name]: e.target.value})
  }
    
  async function handleSubmit(e)  {
      e.preventDefault()

      await AxiosInstance.post('token/obtain/', {
         username: login.username,
          password: login.password
      })
      .then(res => {
        console.log(res.data)
          if (res.status === 200) {
            AxiosInstance.defaults.headers['Authorization'] = 
              `JWT ${res.data.access}`
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
          } else {
            return res
          }
        })
        .then(res => {
          AxiosInstance.get(`users/${login.username}`)
          .then(res => {
            localStorage.setItem('user_id', res.data.id)
            localStorage.setItem('username', login.username)
            setLoginStatus(true)
            navigate('/states')
            console.log(navigate)
          })
      })
      .catch(error => console.error)
    }

    return (
      <div className="form login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="Username">
          Username:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          </div>
          <div className="Password">
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
          </div>
          <div className="submit-button">
          <button type="submit">Login</button>
          </div>
        </form>
        <div className="form-footer">
          <p>Don't have an account yet?</p>
          <a href="/register/">Register</a>
        </div>
      </div>
    );
  
}

export default Login;

