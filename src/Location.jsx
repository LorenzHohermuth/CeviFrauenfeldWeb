import React from 'react'

export default function Location() {
  return (
    <>
        <div className='bg-cevi-grayWhite w-full p-8'>
            <div className=' bg-gradient-to-r from-cevi-red to-cevi-whiteRed rounded-2xl py-6 px-8 text-cevi-white'>
                <h1 className='text-4xl font-cbold mb-4'>Unsere Besammlungsorte</h1>
                <div className='flex text-3xl font-cbold'>
                    <div className='bg-cevi-white rounded-2xl w-full mr-8'>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&ehbc=2E312F" className='w-full h-96 border-spacing-0' />
                        <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                            <img className='h-5 m-2' src="/Icons/maps.png" alt="drive logo" />
                            <a href="https://www.google.com/maps/d/edit?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&usp=sharing" className=' text-neutral-500 underline text-base font-normal' target="_blank">maps.google.com</a>
                        </div>
                    </div>
                    <div>
                        Ein Klick auf eine Ortsmarkierung zeigt den Namen des Besammlungsortes an. <br />
                        Wer einen bestimmten Besammlungsort sucht wird am schnellsten mit der Vollansicht fündig: <br />
                        <br />
                        <a href="https://www.google.com/maps/d/edit?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&usp=sharing" target="_blank" className=' underline'>Link</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
