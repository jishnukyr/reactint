import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      
    </Routes> 
    </>
  )
}

export default App
