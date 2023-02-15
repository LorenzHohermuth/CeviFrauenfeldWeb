import React from 'react'
import { useEffect , useState} from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'

export default function BurgerStufe({state}) {

    const activeClassName = 'bg-gradient-to-r from-cevi-red to-cevi-whiteRed h-10 mx-5 rounded-xl flex items-center drop-shadow-lg text-cevi-white';
    const nonActiveClassName = 'bg-cevi-grayWhite h-10 mx-5 rounded-xl flex items-center text-cevi-gray hover:bg-cevi-white';
    
    const [display, setDisplay] = useState('hidden')
    const [hover, setHover] = useState(false)

    useEffect(() => {
        hover || state
        ?
        setDisplay('block left-64')
        :
        setDisplay('hidden left-0')
    }, [state, hover])

  return (
    <div className={display + ' sticky top-0 h-screen'}>
        <nav onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className='w-72 bg-cevi-grayWhite h-screen absolute pt-2'>
            <div className='my-5'>
              <NavLink  to="froeschli" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Fröschli</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="stufe8" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Stufe 8</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="tigris" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Tigris</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="naftali" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Naftali</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="thabor" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Thabor</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="kalaya" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Kalaya</div>
                  </>
                )}
              </NavLink>
            </div>   
            <div className='my-5'>
              <NavLink  to="karthago" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Stufen Icon" />
                    <div className='font-cbold text-md'>Karthago</div>
                  </>
                )}
              </NavLink>
            </div>   
        </nav>
    </div>
  )
}
