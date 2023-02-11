import React from 'react'

export default function Data() {
  return (
    <>
        <div className='bg-cevi-grayWhite w-full p-8'>
            <div className=' bg-gradient-to-r from-cevi-red to-cevi-whiteRed rounded-2xl py-6 px-8 text-cevi-white'>
                <h1 className='text-4xl font-cbold mb-4'>Datenplan 2022 als PDF</h1>
                <div className='flex text-3xl font-cbold'>
                    <div className='bg-cevi-white rounded-2xl w-7/12 mr-8'>
                        <iframe src="https://drive.google.com/embeddedfolderview?id=1KM48gOeHiTdYhtE6UVpiwF9stLh1aHdc#grid" className='w-full h-96 border-spacing-0' />
                        <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                            <img className='h-5 m-2' src="/Icons/drive.png" alt="drive logo" />
                            <a href="https://drive.google.com/drive/folders/1GVuRS-HPosMHsYGFNWF-An3FB26vV_JB?usp=sharing" className=' text-neutral-500 underline text-base font-normal' target="_blank">drive.google.com</a>
                        </div>
                    </div>
                    Ergänzung zum Datenplan <br />
                    Familiengottesdienst mit CEVI <br />
                    <br />
                    Summerplausch <br />
                    Sonntag, 28. August <br />
                    10.30 Uhr Heerenberg
                </div>
            </div>
        </div>

        
    </>
  )
}
