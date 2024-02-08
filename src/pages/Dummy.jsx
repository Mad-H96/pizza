import React from 'react'
import './dummy.css'


const Dummy = (props) => {
  return (
   <>
   <div className='box'>

    <img className='cardImg' src={props.img} alt="p1" />

    <div className='itemList'>
    <h6 className='headding'> {props.heading} </h6>
    <p className="para">{props.para}</p>
    <p className="price">Starting from - {props.price}</p>
    <p className="Sizes">{props.size}</p>
    </div>
   </div>
   
   
   </>
  )
}

export default Dummy