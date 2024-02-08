import React from 'react'
import PizzaFront from '../assets/pizzaFront.jpg'
import './front.css'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
   <>
   <div>
    <div className="mainImg">
      <img className='mainPizza' src={PizzaFront} alt="main" />

    <div className='pText container'>
      <h1 className='hText'>Anne's Pizza</h1>
      <h4 className='sText'>PIZZA TO FIT ANY TASTE</h4>
      <Link className='link btn btn-warning' to={`/menu`}>View More</Link>
    </div>
    </div>





   </div>
   </>
  )
}

export default Front