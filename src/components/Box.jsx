import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Conta = styled.div`
height: 100vh;
padding-top: 100px;
.item{
    justify-content: space-around;
    display: flex;
    height: 500px;
    width: 500px;
    align-items: center;
    position: relative;
    background-color:red;
    
}
.item1{transform: rotate(${props => props.value ? "45deg" : "180deg"}) scale(${props => props.value ? "1.5" : "1"}) translateY(${props => props.value ? "100px" : "0px"})  ;
    transition: all 2s ease;
    background-color:${props => props.value ? "yellow" : "grey"};
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    background-color:white;

}
.item2{
    height: 50px;
    width:${Conta=>Conta.value?"200px":"79px"};
    transform: translate(200px,200px);
 
    background-color:${Conta=>Conta.value?"black":"red"};
    transition: all 60s ease;
}
.item3{
    height: 50px;
    width: 50px;
    transform: translateX(${Conta=>Conta.value?"200px":"500px"});
    position: absolute;
    left: 0%;
    top: 0%;
    background-color:rosybrown;
}
`
const Box = () => {
    const [first, setfirst] = useState(0)
    useEffect(() => {
      console.log(first);
    }
    , [first])
    
  return (
    <Conta value={first}>
            <div className="item">
                <div className="item1"><i class="fa-solid fa-burger"></i></div>
                <div className="item2">HELLO</div>
                <div className="item3"></div>
                </div> 
                <button onClick={()=>console.log(first)}>click</button>   
                <button onClick={()=>setfirst(!first)}>submit</button>
                <div>value={first}</div>
                </Conta>
   
  )
}

export default Box