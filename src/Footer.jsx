import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-cevi-gray p-16 pb-10 w-full'>

        <div className='flex text-cevi-white font-cbold mb-10'>
            <img src="/Images/LogoText.png" alt="cevifrauenfeld Logo" className='h-32'/>

            <div className='ml-12'>
                Abteilungsleiter <br />
                <br />
                Lukas Vetterli v/o Olin <br />
                Bahnhofstrasse 88b <br />
                8500 Frauenfeld <br />
                <br />
                <a className='underline' href="tel:0793244980">📞 079 / 324 49 80</a> <br />
                <a className='underline' href="mailto:olin@cevi-frauenfeld.ch">✏ olin@cevi-frauenfeld.ch</a> <br />
            </div>

            <div className='ml-12'>
                Abteilungsleiterin <br />
                <br />
                Bettina Schur v/o Joscheba <br />
                Hinterhorben 17 <br />
                8524 Buch b. Frauenfeld <br />
                <br />
                <a className='underline' href="tel:0787406833">📞 078 / 740 68 33</a> <br />
                <a className='underline' href="mailto:joscheba@cevi-frauenfeld.ch">✏ joscheba@cevi-frauenfeld.ch</a> <br />
            </div>

            <div className='ml-12'>
                Präsidentin <br />
                <br />
                Elisabeth Rickenbach v/o Matoaka <br />
                Rüti 10 <br />
                8500 Frauenfeld <br />
                <br />
                <a className='underline' href="tel:0527205358">📞 052 / 720 53 58</a> <br />
                <a className='underline' href="mailto:elisabeth.rickenb@gmail.com">✏ elisabeth.rickenb@gmail.com</a> <br />
            </div>


        </div>

        <div className='text-cevi-white font-cbold'>Impressum | Datenschutz | Cookie-Richtlinie | Sitemap</div>

    </div>
  )
}
