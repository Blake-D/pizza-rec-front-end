import React, { useState, useEffect } from 'react'
import './App.css'
import Recommendation from './components/Recommendation'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function App() {

  const [prices, setPrices] = useState([])
  const [types, setTypes] = useState([])
  const [price, setPrice] = useState()
  const [type, setType] = useState()
  const [pizzaria, setPizzaria] = useState()

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/api/prices`)
      .then(res => res.json())
      .then(priceData => {
        setPrices(priceData)
      })
  }, [])

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/api/types`)
      .then(res => res.json())
      .then(typeData => {
        setTypes(typeData)
      })
  }, [])

  // useEffect(() => {
  //   fetch(`${REACT_APP_SERVER_URL}/api/pizzarias`)
  //   .then(res => res.json())
  //   .then(pizzariaData => {
  //     setPizzaria(pizzariaData)
  //   })
  // },[])

  function handlePrice(e){
    setPrice(e.target.innerText)
  }

  function handleType(e){
    setType(e.target.innerText)
  }

  function handleSubmit(){
    const submission = {
      param1: price,
      param2: type
    }
    axios.post(`${REACT_APP_SERVER_URL}/api/pizzarias`, submission)
      .then(response => {
        setPizzaria(response.data[0].name)
        console.log(pizzaria)
      })
  }

  return (
    <div className="App">
      <ul>
        {prices.map(price => (
          <li>
            <button onClick={handlePrice}>{price.range}</button>
          </li>
        ))}
      </ul>
      <ul>
        {types.map(types => (
          <li>
            <button onClick={handleType}>{types.type}</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Get Recommendation</button>
      <div>your recommendation is: </div>
      {/* <Recommendation pizzaria={pizzaria} /> */}
    </div>
  )
}

export default App