import LoginContext from './LoginContext'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Nav from './components/Nav'
import Footer from './components/Footer'
import States from './components/States'
import StatesDetails from './components/StatesDetails'
import Shelters from './components/Shelters'
import ShelterDetails from './pages/ShelterDetails'
import AnimalDetails from './components/AnimalDetails'
import CanineDetails from './components/CanineDetails'
import FelineDetails from './components/FelineDetails'
import Landing from './pages/Landing'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Client } from "@petfinder/petfinder-js"


const App = () => {
  const [loginStatus, setLoginStatus] = useState(false)
  


  // const componentDidMount = () => {
  //   const script = document.createElement("script");
  //   const script2 = document.createElement("script2")
  
  //   script.src = "https://unpkg.com/axios/dist/axios.min.js";
  //   script.src = "https://unpkg.com/@petfinder/petfinder-js/dist/petfinder.min.js"
  //   script.async = true;
  
  //   document.body.appendChild(script)
  //   document.body.appendChild(script2)
  // }
  // const[canines, setCanines] = useState([])

  // const key = process.env.REACT_APP_PP_KEY
  // const secret = process.env.REACT_APP_PP_SECRET
  // const client = new Client({ apiKey: `${key}`, secret: `${secret}` });
  // const petfinder = require("@petfinder/petfinder-js")

  // client.animal.search()
  // .then(resp => {
  //   resp.data.animals.forEach(function(animal) {
  //       console.log(animal)
        
  //   })
  // });


  return (
    <div className="App">
       <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
      <header className="App-header">
        <Nav/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/states' element={<States />}/>
          <Route path='/states/:id' element={<StatesDetails />}/>
          
          <Route path='/shelters' element={<Shelters />}/>
          <Route path='/shelters/:id' element={<ShelterDetails />}/>

          <Route path='/canines' element={<AnimalDetails />}/>
          <Route path='/canines/:id' element={<CanineDetails />}/>
          <Route path='/felines' element={<AnimalDetails />}/>
          <Route path='/felines/:id' element={<FelineDetails />}/>

          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> } />
          <Route path='/logout' element={ <Logout setLoginStatus={setLoginStatus}/> } />
        </Routes>
      </header>
      <div className="body">
      </div>
      </LoginContext.Provider>
      <Footer />
    </div>
  )
}

export default App;
