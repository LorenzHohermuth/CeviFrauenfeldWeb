import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-cevi-gray p-16 pb-10 w-full'>

        <div className='flex text-cevi-white font-cbold mb-10'>
            <img src="/Images/LogoText.png" alt="cevifrauenfeld Logo" className='h-36'/>

            <div className='ml-12'>
                Abteilungsleiter <br />
                <br />
                Lukas Vetterli v/o Olin <br />
                Bahnhofstrasse 88b <br />
                8500 Frauenfeld <br />
                <br />
                <a href="">📞 079 / 324 49 80</a> <br />
                <a href="">✏ olin@cevi-frauenfeld.ch</a> <br />
            </div>

            <div className='ml-12'>
                Abteilungsleiterin <br />
                <br />
                Bettina Schur v/o Joscheba <br />
                Hinterhorben 17 <br />
                8524 Buch b. Frauenfeld <br />
                <br />
                <a href="">📞 078 / 740 68 33</a> <br />
                <a href="">✏ joscheba@cevi-frauenfeld.ch</a> <br />
            </div>

            <div className='ml-12'>
                Präsidentin <br />
                <br />
                Elisabeth Rickenbach v/o Matoaka <br />
                Rüti 10 <br />
                8500 Frauenfeld <br />
                <br />
                <a href="">📞 052 / 720 53 58</a> <br />
                <a href="">✏ elisabeth.rickenb@gmail.com</a> <br />
            </div>


        </div>

        <div className='text-cevi-white font-cbold ml-96'>Impressum | Datenschutz | Cookie-Richtlinie | Sitemap</div>

    </div>
  )
}
