import './App.css'
import CeviNav from './CeviNav'
import Home from './Home'
import Data from './Data'
import Location from './Location'
import Photos from './Photos'
import Footer from './Footer'
import Walze from './Walze'
import BurgerStufe from './BurgerStufe'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App flex">
        <CeviNav/>
        <div className='hidden'>
          <BurgerStufe />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='data' element={<Data />} />
            <Route path='location' element={<Location />} />
            <Route path='photos' element={<Photos />} />
            <Route path='walze' element={<Walze />} />
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default App