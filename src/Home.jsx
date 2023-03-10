import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
      <div className="bg-cevi-grayWhite w-full p-8">

        <img src="/Images/HomeTent.jpg" alt="HomeTent" className='rounded-2xl w-full'/>

        <div className='bg-gradient-to-r from-cevi-red to-cevi-whiteRed w-full rounded-2xl px-7 py-6 my-8 text-cevi-white'>
          <div className='text-4xl font-cbold'>Cevi Frauenfeld - Wer sind wir?</div>
          <div className='text-3xl leading-9 font-cbold'>
          <br />
          Der Cevi fördert Begabungen, überträgt Verantwortung <br />
          und unterstützt die Entwicklung der Persönlichkeit. <br />
          <br />
          Der Cevi verbindet Menschen und unterstützt sie <br />
          in der gemeinsamen Verwirklichung ihrer Ideen. <br />
          <a className='text-cevi-blue' href="">Leitbild und Werte</a>
          </div>
        </div>


        <div className='flex'>

          <div className='w-1/2'>
            <div className='text-3xl font-cbold bg-cevi-white rounded-2xl px-7 py-6 mb-8'>
              Videoportrait
              <iframe className='rounded-2xl w-full mt-4 h-96' src="https://www.youtube.com/embed/LyG-zXucT60" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className='bg-gradient-to-r from-cevi-red to-cevi-whiteRed text-3xl font-cbold rounded-2xl px-7 py-6 text-cevi-white flex flex-col items-center'>
              Wann ist Cevi - Datenplan
              <img src="/Icons/white/schedule.svg" alt="calender" className='w-1/2 mt-4' />
              <Link to="data" className='flex rounded-xl bg-cevi-white p-3 text-cevi-gray font-cbold text-base w-64 justify-center'>Zu den Datenplänen</Link>
            </div>
          </div>

          <div className='bg-cevi-white px-7 py-6 ml-8 rounded-xl w-1/2 text-cevi-gray'>
            <div className='text-4xl font-cbold'>Möchtest du vorbeischauen?</div>
              <br />
              <div className='text-3xl leading-9 font-cbold'>
              Mit vielen anderen Kindern in deinem Alter kannst Du an abwechslunsgreichen
              Programmen teilnehmen! Wir spielen, singen, toben, lachen und erleben spannende Geschichten. <br />
              <br />
              Cevi ist für Kinder ab dem Kindergarten bis 1. Oberstufe. Wir treffen uns zwei bis drei Mal
              pro Monat am Samstagnachmittag. Wir haben auch eine Gruppe für Kinder und Jugendliche mit Beeinträchtigung:
              <a className=' underline' href="">Die Stufe 8</a> <br />
              <br />
              Rufe uns an oder schreibe eine E-Mail an <br />
              <br />
              <a className='text-cevi-blue' href="">kontakt@cevi-frauenfeld.ch</a> <br />
              <br />
              <a className='text-cevi-blue' href="">+41 79 000 00 00</a>
            </div>
          </div>

        </div> 

        <div className=' bg-cevi-white w-full rounded-2xl px-7 py-6 mt-8 text-cevi-gray'>

          <div className='text-4xl font-cbold'>Cevi Frauenfeld - Wer sind wir?</div>
          <br />

          <div className='text-3xl leading-9 font-cbold flex w-full mb-4'>
            
            <img src="/Images/Cevihaus.png" alt="Cevihaus" className=' w-1/2 object-cover rounded-2xl'/>

            <div className='text-3xl leading-9 font-cbold w-1/2 ml-6'>
            Gerne vermieten wir unser Cevihaus an Gäste. Für ein Wochenende oder auch für Wochenlager. <br />
            Wir sind mit Matratzen, Küche, WC's, Dusche, Büro, Bastelraum, Werkstatt, Garten, Parkplätzen, Pingpongtisch etc. gut ausgestattet. <br />
            <br />
            Nehmen Sie für Mietanfragen gerne Kontakt mit uns auf!
            
            </div>
          </div>

          <Link to="/" className='flex rounded-xl bg-gradient-to-r from-cevi-red to-cevi-whiteRed p-3 text-cevi-white font-cbold text-base w-64 justify-center'>Hier geht es zum Kontakt</Link>
          

        </div>


      </div>
  )
}
