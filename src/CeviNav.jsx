import React from 'react'
import BurgerStufe from './BurgerStufe'
import BurgerUeberUns from './BurgerUeberUns'
import { NavLink  } from 'react-router-dom'
import { useState } from 'react';


export default function CeviNav() {

  const [stufenIsActive, setStufenIsActive] = useState(false);
  const [ueberUnsIsActive, setUeberUnsIsActive] = useState(false);

  const activeClassName = 'bg-gradient-to-r from-cevi-red to-cevi-whiteRed h-10 mx-5 rounded-xl flex items-center drop-shadow-lg text-cevi-white';
  const nonActiveClassName = 'bg-cevi-white h-10 mx-5 rounded-xl flex items-center hover:bg-cevi-grayWhite text-cevi-gray';

  return (
    <>
      <div className='flex'>
        <nav className='w-64 top-0 bg-cevi-white h-screen sticky drop-shadow-2xl'>
            <NavLink to="/" className="flex flex-row text-lg font-bold items-center p-6 pb-1">
              <img src="/Images/Simple.png" className='h-10' alt="Cevi Logo" />
              <div className='flex-col pl-1.5'>
                  <div className='font-bold leading-5'>Cevi <br />
                  Frauenfeld
                  </div>
              </div>
            </NavLink>

            <div className='my-5'>
              <NavLink  to="/" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Home.svg`} className='h-9 ml-3 mr-1.5' alt="Home Icon" />
                    <div className='font-cbold text-md'>Home</div>
                  </>
                )}
              </NavLink>
            </div>

            <div className='my-5'>
              <NavLink  to="data" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Data.svg`} className='h-9 ml-3 mr-1.5' alt="Data Icon" />
                    <div className='font-cbold text-md'>Daten</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5'>
              <NavLink to="location" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Leafe.svg`} className='h-9 ml-3 mr-1.5' alt="Leafe Icon" />
                    <div className='font-cbold text-md'>Orte</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5' onMouseOver={() => setStufenIsActive(true)} onMouseOut={() => setStufenIsActive(false)}>
              <NavLink to="stufen" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Departements.svg`} className='h-9 ml-3 mr-1.5' alt="Departements Icon" />
                    <div className='font-cbold text-md'>Stufen</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5'>
              <NavLink  to="photos" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Photos.svg`} className='h-9 ml-3 mr-1.5' alt="Photos Icon" />
                    <div className='font-cbold text-md'>Fotos</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5'>
              <NavLink  to="Walze" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Text.svg`} className='h-9 ml-3 mr-1.5' alt="Text Icon" />
                    <div className='font-cbold text-md'>Walze</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5' onMouseOver={() => setUeberUnsIsActive(true)} onMouseOut={() => setUeberUnsIsActive(false)}>
              <NavLink to="ueberUns" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/AboutUs.svg`} className='h-9 ml-3 mr-1.5' alt="AboutUs Icon" />
                    <div className='font-cbold text-md'>Über uns</div>
                  </>
                )} 
              </NavLink>
            </div>            

            <div className='my-5'>
              <NavLink  to="contact" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Contact.svg`} className='h-9 ml-3 mr-1.5' alt="Contact Icon" />
                    <div className='font-cbold text-md'>Kontakt</div>
                  </>
                )}
              </NavLink>
            </div>            

            <div className='my-5'>
              <NavLink  to="fuerLeiter" className={({ isActive }) =>isActive ? activeClassName : nonActiveClassName}>
                {({ isActive }) => (
                  <>
                    <img src={`/Icons/${isActive ? "white" : "gray"}/Tent.svg`} className='h-9 ml-3 mr-1.5' alt="Tent Icon" />
                    <div className='font-cbold text-md'>Für Leiter</div>
                  </>
                )}
              </NavLink>
            </div>            

        </nav>
      </div>
      <BurgerStufe state={stufenIsActive}/>
      <BurgerUeberUns state={ueberUnsIsActive}/>
    </>
  )
}
