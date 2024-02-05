import React from "react"
import {Routes,Route} from "react-router-dom"
import Login_form from "./Components/Login_form"
// import  Signup_form  from "./Components/Signup_form"
import Home from "./Components/Home"
import "./App.css"
import Signup_form from './Components/Signup_form'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen custom h-screen my-20">
    <Routes>
      <Route path="/" element={<Login_form />}></Route>
      <Route path="/signup" element={<Signup_form />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
    
    </>
  )
}

export default App
