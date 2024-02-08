import React from 'react'
import Pizza from '../assets/pitza.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Component } from "react";

class Navbar extends Component{

  state = {clicked:false}
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }

  render(){
    
  return (
    <>
    <div className="nav">

      <div >

        <Link className='link' to={`/`}><img className="img" src={Pizza} alt="piza" /></Link>
           
      </div>

      <div className='resIcons' onClick={this.handleClick}>

      <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
    
      </div>

    <div className="list">

            <ul className={this.state.clicked ? "listItema active" : "listItema" }>

                <li className="item"><Link className='link' to={`/`}>Home</Link></li>
                <li className="item"><Link className='link' to={`/menu`}>Menu</Link></li>
                <li className="item"><Link className='link' to={`/about`}>About Us</Link></li>
                <li className="item"><Link className='link' to={`/contact`}>Contact</Link></li>

            </ul>
        </div>

    </div>
    </>
  )
}
}

export default Navbar