import React, { useState, useEffect } from 'react'
import './App.css'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function App() {

  const [prices, setPrices] = useState([])
  const [types, setTypes] = useState([])
  const [price, setPrice] = useState()
  const [type, setType] = useState()
  const [pizzaria, setPizzaria] = useState([])

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
  //     console.log(pizzaria)
  //   })
  // }, [])

  function handlePrice(e){
    setPrice(e.target.innerText)
    console.log(price)
  }

  function handleSubmit(){
    // console.log(`price is set as ${price}`)
    const param1 = {
      thing: price
    }
    axios.post(`${REACT_APP_SERVER_URL}/api/pizzarias`, param1)
      .then(response => {
        console.log(response)
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
            <button>{types.type}</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Get Recommendation</button>
    </div>
  )
}

export default App