import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'


const Fotter = () => {
  return (
    <>

    <div className="footter">
        <div className="menu">

        <ul className='fMenu'>
            <li><Link className='links' to={`/`}>Home</Link></li>
            <li><Link className='links' to={`/menu`}>Menu</Link></li>
            <li><Link className='links' to={`/about`}>About us</Link></li>
            <li><Link className='links' to={`/contact`}>Contact</Link></li>
        </ul>


        </div>

        <div className="social">
           
            <i class="fa-brands fa-facebook sIcons"></i>
            <i class="fa-brands fa-twitter sIcons"></i>
            <i class="fa-brands fa-tiktok sIcons"></i>
            <i class="fa-brands fa-pinterest sIcons"></i>
       
        </div>

        <div className="copyright">Copyright © 2024 annespizza.com | Powered by React</div>

    </div>
    
    
    </>
  )
}

export default Fotter