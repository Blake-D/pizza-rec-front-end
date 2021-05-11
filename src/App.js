import React, { useState, useEffect } from 'react'
import './App.css'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function App() {

  const priceRanges = ["$", "$$", "$$$", "$$$$", "$$$$$"]
  const [price, setPrice] = useState([])
  const pizzaTypes = ["chicago", "greek", "neapolitan", "new york", "sicilian"]
  const [type, setType] = useState()
  const [recommendation, setRecommendation] = useState()
  const pizzarias = [
    {
      name: "McPizza's",
      priceRange: "$",
      typeServed: "chicago"
    },
    {
      name: "House of Za's",
      priceRange: "$$",
      typeServed: "greek"
    },
    {
      name: "Dom's Pizza Emporium",
      priceRange: "$$$",
      typeServed: "neapolitan"
    },
    {
      name: "Chicago Eddie's",
      priceRange: "$$$$",
      typeServed: "new york"
    },
    {
      name: "Angela's Pizza and Calzone Warehouse",
      priceRange: "$$$$$",
      typeServed: "sicilian"
    },
    {
      name: "Thin Moustache Pies",
      priceRange: "$",
      typeServed: "greek"
    },
    {
      name: "Heart Stoppers",
      priceRange: "$$",
      typeServed: "neapolitan"
    },
    {
      name: "Snobberia",
      priceRange: "$$$",
      typeServed: "new york"
    },
    {
      name: "Pizza Cave",
      priceRange: "$$$$",
      typeServed: "sicilian"
    },
    {
      name: "Pizza Makers",
      priceRange: "$$$$$",
      typeServed: "chicago"
    },
    {
      name: "John's",
      priceRange: "$",
      typeServed: "neapolitan"
    },
    {
      name: "Cleveland's New York Pizza",
      priceRange: "$$",
      typeServed: "new york"
    },
    {
      name: "El Sweenie's",
      priceRange: "$$$",
      typeServed: "sicilian"
    },
    {
      name: "The Snob Shed",
      priceRange: "$$$$",
      typeServed: "chicago"
    },
    {
      name: "Pizzaholica",
      priceRange: "$$$$$",
      typeServed: "greek"
    },
    {
      name: "Pizza's 'r' Us",
      priceRange: "$",
      typeServed: "new york"
    },
    {
      name: "Pizza Mart",
      priceRange: "$$",
      typeServed: "sicilian"
    },
    {
      name: "Pizza Plus",
      priceRange: "$$$",
      typeServed: "chicago"
    },
    {
      name: "Pizzalicious",
      priceRange: "$$$$",
      typeServed: "greek"
    },
    {
      name: "Pizzas for More",
      priceRange: "$$$$$",
      typeServed: "neapolitan"
    },
    {
      name: "Pizza for Less",
      priceRange: "$",
      typeServed: "sicilian"
    },
    {
      name: "A Place for Pizza",
      priceRange: "$$",
      typeServed: "chicago"
    },
    {
      name: "Pizza for You, Pizza for Me!",
      priceRange: "$$$",
      typeServed: "greek"
    },
    {
      name: "Pizza for Hipsters",
      priceRange: "$$$$",
      typeServed: "neapolitan"
    },
    {
      name: "Wait in Line to get Pizza",
      priceRange: "$$$$$",
      typeServed: "new york"
    }
  ]

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/api/prices`)
      .then(res => res.json())
      .then(priceData => {
        setPrice(priceData)
      })
  }, [])

  console.log(price)

  // function handleType(e){
  //   setType(e.target.innerText)
  // }

  // function handlePrice(e){
  //   setPrice(e.target.innerText)
  // }

  // function handleRecommendation(){
  //   for(let i = 0; i < pizzarias.length; i++){
  //     if(pizzarias[i].priceRange === price && pizzarias[i].typeServed === type){
  //       setRecommendation(pizzarias[i].name)
  //       i = pizzarias.length
  //     }
  //   }
  // }

  return (
    <div className="App">
      {/* <ul>
        {pizzaTypes.map(pizzaType => (
          <li>
            <button onClick={handleType}>{pizzaType}</button>
          </li>
        ))}
      </ul>
      <ul>
        {priceRanges.map(priceRange => (
          <li>
            <button onClick={handlePrice}>{priceRange}</button>
          </li>
        ))}
      </ul>
      <div>
        <h1>Pizza type is: {type}</h1>
        <h1>Price range is: {price}</h1>
        <h1>We recommend: {recommendation}</h1>
        <button onClick={handleRecommendation}>Get Recommendation</button>
      </div> */}
    </div>
  )
}

export default App