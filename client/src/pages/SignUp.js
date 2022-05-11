import React, { useState } from "react";
import { RegisterUser } from '../services/Auth'
import { useNavigate } from "react-router-dom";
import '../styles/register.css'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  };

  return (
    <div className="register-page">
      <div className='register-leftside'></div>
      <div className="screen__content">
           <div>
            <h3 className='register-description'>START FOR FREE</h3>
            <h1 className='register-header'>Sign up to Codr.</h1>
          </div>
        <form className="col-2" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="name">Name</label>
            <input
              className="register_input"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="email">Email</label>
            <input
              className="register_input"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="password">Password</label>
            <input
              className="register_input"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="MINIMUM 8 CHARACTERS"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="confirmPassword">Confirm Password</label>
            <input
              className="register_input"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your passord"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <p className='register-rules'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
          <button className='login_register'
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }>Become a Pro</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
