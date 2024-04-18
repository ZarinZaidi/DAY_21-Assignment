import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Product from './Product'
import News from './News'
import About from './About'
import Corporate from './Corporate'
import Contact from './Contact'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/prod' element={<Product />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/corp' element={<Corporate />} />
          <Route path='/con' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
