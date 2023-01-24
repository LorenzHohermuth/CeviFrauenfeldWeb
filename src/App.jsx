import './App.css'
import CeviNav from './CeviNav'
import Home from './Home'
import Footer from './Footer'

function App() {

  return (
    <div className="App flex">
        <CeviNav />
        <div className='w-full'>
          <Home />
          <Footer />
        </div>
    </div>
  )
}

export default App