import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
     
  )
}

export default App
