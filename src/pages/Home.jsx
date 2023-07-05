import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import image from '../assets/pic.jpg'
export const Home = () => {
  return (
    <>
<div className="nav">
        <div className="image">   
        <img src={image} alt="" />
        </div>
   <div className="a">premium</div>
   <div className="b">help</div>
    <div className="c">Download</div>
    <div className="d">Sign Up</div>
    <Link to={"/Login"} id='lg' >
      
    <div className="e">Log In</div>
    </Link>
</div>
          <div className="con">
          <div className="head">Music for everyone</div>
          <div className="sub">Millions of songs. No creadit card needed</div><br />
          <div className="button">
            <button>GET SPOTIFY FREE</button>
          </div>
          </div>

          </>
  )
}
export default Home
