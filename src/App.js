import React, { useState, useEffect } from 'react'
import './App.css'
import Chicago from './images/chicago.jpeg'
import Greek from './images/greek.jpeg'
import Neapolitan from './images/neapolitan.jpeg'
import NewYork from './images/new_york.jpeg'
import Sicilian from './images/sicilian.jpeg'
const axios = require('axios')
const REACT_APP_SERVER_URL = "http://localhost:8000"

function App(){

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
    if(price !== undefined && type !== undefined){
      const submission = {
        param1: price,
        param2: type
      }
      axios.post(`${REACT_APP_SERVER_URL}/api/pizzarias`, submission)
        .then(response => {
          setPizzaria(response.data[0].name)
        })
    }
  }

  return (
    <div className="App">
      <div id="image-container">
        <img src={Chicago} alt="Chicago style pizza"/><img src={NewYork} alt="New York style pizza"/><img src={Greek} alt="Greek style pizza"/><img src={Sicilian} alt="Sicilian style pizza"/><img src={Neapolitan} alt="Neapolitan style pizza"/>
      </div>
      <h2>So tell me, what kinda pie are you into?</h2>
      <ul>
        {types.map(types => (
          <li>
            <button className="type-option" onClick={handleType}>{types.type}</button>
          </li>
        ))}
      </ul>
      <h2>And how much are you looking to spend?</h2>
      <ul>
        {prices.map(price => (
          <li>
            <button className="price-option" onClick={handlePrice}>{price.range}</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Pizza Style: {type}</h3>
        <h3>Price Range: {price}</h3>
      </div>
      <button id="rec-button" onClick={handleSubmit}>Get Recommendation!</button>
      <h1>We Recommend: <a href="https://tenor.com/search/sorry-bud-gifs" target="_blank" rel="noreferrer">{pizzaria}</a></h1>
    </div>
  )
}

export default App