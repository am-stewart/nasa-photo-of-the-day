import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/constants'

/////IMPORT WHATEVER OTHER COMPONENTS I ADD
import Title from './Title'
import Date from './Date'
import Copyright from './Copyright'
import Image from './Image'
import Explanation from './Explanation'

function App() {
  const [data, setData] = useState({});

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
      < Title data={data} />
      < Date data={data} />
      < Copyright data={data} />
      < Image data={data} />
      < Explanation data={data} />
    </div>
  );
}

export default App;
