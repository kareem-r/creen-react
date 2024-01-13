import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import { Routes , Route , Navigate} from 'react-router-dom' 



const Routers = () => {
  return (
    <Routes>
              <Route path='/' element={<Navigate to={"/home"}/>} />

        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default Routers