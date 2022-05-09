import './styles/App.css';
import SearchButton from './components/SearchButton';
import axios from 'axios'
import { BASE_URL } from './globals'
import { useEffect } from 'react';
import React from 'react';
import { Client } from "@petfinder/petfinder-js"
// import SearchForm from './components/SearchForm';

const App = (props) => {
  const[canines, setCanines] = useState([])

  const key = process.env.REACT_APP_PP_KEY
  const secret = process.env.REACT_APP_PP_SECRET
  const client = new Client({ apiKey: `${key}`, secret: `${secret}` });


  useEffect(() => {
    async function getCanines() {
      const res = await axios.get(`${BASE_URL}/
      
      // dog?api_key=${process.env.REACT_APP_PP_KEY}`)
      console.log(res)
    }
    getCanines()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>PetPursuit.com</h1>
        <SearchButton />
      </header>
      <div className="body">
        {/* <SearchForm /> */}
        
      </div>
    </div>
  )
}

export default App;
