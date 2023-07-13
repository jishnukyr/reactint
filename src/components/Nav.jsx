import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
background-color: aliceblue;
padding: 40px;
position: relative;
.main_nav{
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  font-size: 30px;
  font-weight: bold;
  
}
.links{
  display: flex;

}
.link1,.link2,.link3{
  margin-right: 25px;
}
.icon{
    display: none;
  }
  

@media screen and (max-width:600px){
  .links{
    display: none;
  }
  .icon{
    display: flex;
  }
}
.side_nav{
  background-color: #d41834;
  height: 90vh;
  width: 300px;
  position: absolute;
  top: 0%;
  left: 0%;
  transform:translateX(${props=>props.value?"0px":"-300px"});
  transition: all 1s ease;
}
@media screen and (min-width: 600px){
  .side_nav{
    background-color: green;
    transform:translateX(-300px);
  }
  
}
`
const Nav = () => {
  const [first, setfirst] = useState(false)
  return (
   <Container value={first}>
        <div className="main_nav">
          <div className="logo">LOGO</div>
          
          <div className="links">
            <div className="link1">HOME</div>
            <div className="link2">ABOUT</div>
            <div className="link3">CONTACT</div>
          </div>
          <div className="icon" onClick={()=>setfirst(!first)}>
          <i class="fa-solid fa-burger"></i>
          </div>
        </div>
        <div className="side_nav">
        <div className="logo">LOGO</div>
          
          <div className="links_side">
            <div className="link1_side">HOME</div>
            <div className="link2_side">ABOUT</div>
            <div className="link3_side">CONTACT</div>
          </div>
        </div>

   </Container>
  
    
   
  )
}

export default Nav