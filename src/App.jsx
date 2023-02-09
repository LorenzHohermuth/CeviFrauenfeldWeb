import './App.css'
import CeviNav from './CeviNav'
import Home from './Home'
import DataLocations from './DataLocations'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App flex">
        <CeviNav />
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='data' element={<DataLocations />} />
            <Route path='location' element={<DataLocations />} />
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default App