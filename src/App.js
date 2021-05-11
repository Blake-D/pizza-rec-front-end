import React, { useState, useEffect } from 'react'
import './App.css'
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
      <div>Price Range: {price}</div>
      <div>Pizza Style: {type}</div>
      <div>We Recommend: {pizzaria}</div>
    </div>
  )
}

export default App