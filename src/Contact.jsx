import React from 'react'

export default function Contact() {
  return (
    <div className='bg-cevi-grayWhite w-full p-8 font-cbold'>
        <img className='w-full object-cover h-128 rounded-2xl' src="./Images/contact.jpg" alt="contact image" />
        <div className='my-6 bg-gradient-to-r from-cevi-red to-cevi-whiteRed rounded-2xl py-6 px-8 text-cevi-white'>
            <div className='text-4xl mb-6'>Einmal bei uns vorbeischauen?</div>
            <div className='text-3xl leading-9'>
            Wenn du einmal Ceviluft schnuppern möchtest, dann senden wir dir gerne Informationen zum nächsten Cevi-Nachmittag. <br />
            Schreibe uns eine E-Mail an. <br />
            <br />
            <a className=' underline' href="mailto:kontakt@cevi-frauenfeld.ch">kontakt@cevi-frauenfeld.ch</a>
            </div>
        </div>
        <div className='my-6 bg-cevi-white py-6 px-8 text-cevi-gray rounded-2xl'>
            <div className='text-4xl'>Cevi Frauenfeld - Wer sind wir?</div>
            <div className='grid grid-cols-2'>
                <div className='my-8'>
                    <div className='text-3xl leading-9'>Knabenabteilung</div>
                    <div className='text-2xl'>
                        <br />
                        Lukas Vetterli v/o Olin <br />
                        Bahnhofstrasse 88b <br />
                        8500 Frauenfeld <br />
                        <br />
                        <a className='underline' href="tel:0793244980">📞 079 / 324 49 80</a> <br />
                        <a className='underline' href="mailto:olin@cevi-frauenfeld.ch">✏ olin@cevi-frauenfeld.ch</a> <br />
                    </div>
                </div>
                <div className='my-8'>
                    <div className='text-3xl leading-9'>Mädchenabteilung</div>
                    <div className='text-2xl'>
                        <br />
                        Bettina Schur v/o Joscheba <br />
                        Hinterhorben 17 <br />
                        8524 Buch b. Frauenfeld <br />
                        <br />
                        <a className='underline' href="tel:0787406833">📞 078 / 740 68 33</a> <br />
                        <a className='underline' href="mailto:joscheba@cevi-frauenfeld.ch">✏ joscheba@cevi-frauenfeld.ch</a> <br />
                    </div>
                </div>
                <div className='my-8'>
                    <div className='text-3xl leading-9'>Präsidentin Verein</div>
                    <div className='text-2xl'>
                        <br />
                        Elisabeth Rickenbach v/o Matoaka <br />
                        Rüti 10 <br />
                        8500 Frauenfeld <br />
                        <br />
                        <a className='underline' href="tel:0527205358">📞 052 / 720 53 58</a> <br />
                        <a className='underline' href="mailto:elisabeth.rickenb@gmail.com">✏ elisabeth.rickenb@gmail.com</a> <br />
                    </div>
                </div>
                <div className='my-8'>
                    <div className='text-3xl leading-9'>Vereinshaus "Cevihuus"</div>
                    <div className='text-2xl'>
                        <br />
                        Christina Stäheli <br />
                        Walzmühlestrasse 16<br />
                        8500 Frauenfeld <br />
                        <br />
                        <a className='underline' href="tel:0787080944">📞 078 / 708 09 44</a> <br />
                        <a className='underline' href="mailto:christina@gmx.ch">✏ christina@gmx.ch</a> <br />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-cevi-white rounded-2xl w-full mr-8'>
            <div className='text-4xl text-cevi-gray py-6 mx-8'>Karte Vereinshaus "Cevihuus"</div>
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBs_lAfpuIjfx7DGisR7oUh1ZZ_C5qtGKc&q=Walzm%C3%BChlestrasse+16%2C+Frauenfeld%2C+Schweiz&maptype=roadmap" className='w-full h-128 border-spacing-0 rounded-t-2xl' />
            <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                <img className='h-5 m-2' src="/Icons/maps.png" alt="drive logo" />
                <a href="https://www.google.com/maps?ll=47.551508,8.891698&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=Walzm%C3%BChlestrasse+16+8500+Frauenfeld" className=' text-neutral-500 underline text-base font-normal' target="_blank">maps.google.com</a>
            </div>
        </div>
    </div>
  )
}
