import React from 'react'

export default function CeviNav() {
  return (
      <nav className='w-72 bg-cevi-white h-full sticky top-0'>
          <div className="flex flex-row text-lg font-bold items-center p-6">
          <img src="/Images/Simple.png" className='h-10' alt="Cevi Logo" />
          <div className='flex-col pl-1.5'>
              <div className='font-bold leading-5'>Cevi <br />
              Frauenfeld
              </div>
          </div>
          </div>
          <a className='bg-gradient-to-r from-cevi-red to-cevi-whiteRed h-10 mx-5 rounded-xl flex items-center drop-shadow-lg hover:text-cevi-grayWhite'>
          <img src="/Icons/white/Home.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-white text-md'>Home</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Data.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Daten</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Leafe.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Orte</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Departements.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Stufen</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Photos.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Fotos</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Text.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Walze</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/AboutUs.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Über uns</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Contact.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Kontakt</div>
          </a>
          <a className='bg-cevi-white h-10 m-5 rounded-xl flex items-center hover:bg-cevi-grayWhite'>
          <img src="/Icons/gray/Tent.svg" className='h-9 ml-3 mr-1.5' alt="Home icon" />
          <div className='font-cbold text-cevi-gray text-md'>Für Leiter</div>
          </a>
      </nav>
  )
}
