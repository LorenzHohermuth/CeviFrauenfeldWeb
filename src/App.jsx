import './App.css'
import CeviNav from './CeviNav'
//sites------------------
import Home from './Home'
import Data from './Data'
import Location from './Location'
import Stufe from './Stufe'
import Photos from './Photos'
import Walze from './Walze'
import Contact from './Contact'
//-------------------------
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App flex">
        <CeviNav/>
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='data' element={<Data />} />
            <Route path='location' element={<Location />} />
            <Route path='stufen' element={<Stufe />} />
            <Route path='photos' element={<Photos />} />
            <Route path='walze' element={<Walze />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default App