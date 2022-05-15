import LoginContext from './LoginContext'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Nav from './components/Nav'
import NavNEW from './components/Nav'
import Footer from './components/Footer'
import States from './components/States'
import StatesDetails from './components/StatesDetails'
import AddShelter from './components/AddShelter'
import DeleteShelter from './components/DeleteShelter'
import Shelters from './components/Shelters'
import SheltersNEW from './components/SheltersNEW'
import ShelterDetails from './pages/ShelterDetails'
import ShelterDetailsNEW from './pages/ShelterDetails'
import AnimalDetails from './components/AnimalDetails'
import CanineDetails from './components/CanineDetails'
import CanineDetailsNEW from './components/CanineDetails'
import FelineDetails from './components/FelineDetails'
import FelineDetailsNEW from './components/FelineDetails'
import Landing from './pages/LandingNEW'
import LandingNEW from './pages/LandingNEW'
import MyProfile from './pages/MyProfile'
import './styles/App.css'
import axios from 'axios'
import { BASE_URL } from './globals'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Client } from "@petfinder/petfinder-js"
import AxiosInstance from './AxiosInstance'

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState(null)

  // const handleLogOut = () => {
  //   setUser(null)
  //   setLoginStatus(false)
  //   localStorage.clear()
  // }

  // const handleLogin = async (username) => {
  //   const userList = await AxiosInstance.get(`users/${username}`);
  //   console.log(userList);
  //   setUser(userList.data);
  // };

  // useEffect(() => {
  //   handleLogin(localStorage.username)
  //     .then((res) => {
  //       setUser(res.data);
  //       console.log(user);
  //     })
  //     .catch((error) => console.error);
  // }, []);

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
       {/* <LoginContext.Provider value={{loginStatus, setLoginStatus, user}}> */}
      <header className="App-header">
        {/* <Nav user={user} loginStatus={loginStatus}/> */}
        <NavNEW />
      </header>
      <div className="body">
        <Routes>
          <Route path='/' element={<LandingNEW />}/>
          <Route path='/states' element={<States user={user} loginStatus={loginStatus}/>}/>
          <Route path='/states/:id' element={<StatesDetails user={user} loginStatus={loginStatus}/>}/>
          
          <Route path='/shelters' element={<SheltersNEW user={user} loginStatus={loginStatus}/>}/>
          <Route path='/shelters/addshelters' element={<AddShelter/>} />
          <Route path='/shelters/:id' element={<ShelterDetailsNEW user={user} loginStatus={loginStatus}/>}/>
          <Route path='/shelters/:id/delete' element={<DeleteShelter/>} />

          <Route path='/canines' element={<AnimalDetails user={user} loginStatus={loginStatus}/>}/>
          <Route path='/canines/:id' element={<CanineDetailsNEW user={user} setUser={setUser}loginStatus={loginStatus}/>}/>
          <Route path='/felines' element={<AnimalDetails user={user} loginStatus={loginStatus}/>}/>
          <Route path='/felines/:id' element={<FelineDetailsNEW user={user} loginStatus={loginStatus}/>}/>

          <Route path='/register' element={ <Register user={user} loginStatus={loginStatus}/>}/>
          <Route path='/login' element={ <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> } />
          <Route path='/logout' element={ <Logout setLoginStatus={setLoginStatus}/> } />
          <Route path='/users/:id' element={<MyProfile user={user} loginStatus={loginStatus}/>}/>
        </Routes>

      </div>
      {/* </LoginContext.Provider> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App;
