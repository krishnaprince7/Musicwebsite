import React from 'react'
import Home from './componenets/Home'
import { Routes,Route} from 'react-router-dom'
import Firstpage from './componenets/Firstpage'
import Login from './componenets/Login'
import Sinup from './componenets/Sinup'

const App = () => {
  return (
    <div>
    <>
<Routes>
  <Route path='/' element={<Firstpage/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/sigup' element={<Sinup/>}></Route>
</Routes>

    </>
    </div>
  )
}

export default App