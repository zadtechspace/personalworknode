import React from 'react'
import Signup from './Component/Signup'
import { Route, Routes } from 'react-router-dom'
import Signin from './Component/Signin'
import Nav from './Component/Nav'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard'
// import Formik from './Component/Formik'

const App = () => {
  
  let authToken = localStorage.getItem('token')
  return (
    <div>
      
      <Routes>
        <Route path='/' element ={<Nav/>}>

        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/signin' element ={<Signin/>}/>
        <Route exact path='/' element ={<Home/>}></Route>
        {/* <Route exact path='/formik' element ={<Formik/>}></Route> */}
        
        </Route>
        <Route path='/dashboard' element ={authToken? <Dashboard/> :<Signin/>}/>
      </Routes>

    </div>
  )
}

export default App