import React from 'react'
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
    <div className="e">Log In</div>
</div>
          <div className="con">
          <div className="head">Music for everyone</div>
          <div className="sub">Millions of songs. No creadit card needed</div>
          <div className="button">
            <button>GET SPOTIFY FREE</button>
          </div>
          </div>

          </>
  )
}
export default Home
