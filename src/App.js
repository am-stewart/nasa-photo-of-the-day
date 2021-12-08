import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/constants'

/////IMPORT WHATEVER OTHER COMPONENTS I ADD


function App() {
  const [data, setData] = useState();

  useEffect( () => {
    const fetchData = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setData(res.data)
      })
      .catch(err =>{
        console.log('error')
      })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1> NASA Photo of the Day! </h1>
      <h2>title of photo - taken from data</h2>
      <h3>date of photo - taken from data</h3>
      <p>copyright - taken from data</p>
      {/*put the image here? in a div??*/}
      <p>explanation of photo - taken from data</p>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
