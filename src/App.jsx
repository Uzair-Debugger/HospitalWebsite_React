import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Body/Home'
import Contact from './Components/Body/Contact'
import OurServices from './Components/Body/OurServices'
import Login from './Components/Login_Signup/Login'
import Signup from './Components/Login_Signup/Signup'
import Appointment from './Components/Body/Appointment'
import OurDoctors from './Components/Body/Doctors'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/doctors' element={<OurDoctors />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App

