import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<div>Test</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
