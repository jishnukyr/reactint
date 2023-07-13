import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import Login from './pages/Login'
import Inta from './pages/Inta'
import Profile from './pages/Profile'
import Landing from './pages/Landing'





function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/Inta" element={<Inta/>}></Route>
      <Route path="/Landing" element={<Landing/>}></Route>
    </Routes> 
    </>
  )
}

export default App
