import React from 'react'

export default function Data() {
  return (
    <>
        <div className="bg-cevi-grayWhite w-full p-8">
            <div className='bg-gradient-to-r from-cevi-red to-cevi-whiteRed w-full rounded-2xl px-7 py-6 mb-8 text-cevi-white'>
                <div className='text-4xl font-cbold mb-3'>Daten und Orte</div>
                <div className='flex'>
                    <div className='bg-cevi-white rounded-2xl w-1/2 mr-8'>
                        <iframe src="https://drive.google.com/embeddedfolderview?id=1KM48gOeHiTdYhtE6UVpiwF9stLh1aHdc#grid" className='w-full h-96 border-spacing-0' />
                        <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                            <img className='h-5 m-2' src="/Icons/drive.png" alt="drive logo" />
                            <a href="https://drive.google.com/drive/folders/1GVuRS-HPosMHsYGFNWF-An3FB26vV_JB?usp=sharing" className=' text-neutral-500 underline' target="_blank">drive.google.com</a>
                        </div>
                    </div>
                    <div className='bg-cevi-white rounded-2xl w-1/2'>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&ehbc=2E312F" className='w-full h-96 border-spacing-0' />
                        <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                            <img className='h-5 m-2' src="/Icons/maps.png" alt="drive logo" />
                            <a href="https://www.google.com/maps/d/edit?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&usp=sharing" className=' text-neutral-500 underline' target="_blank">maps.google.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-cevi-white rounded-2xl w-1/2'>
                <iframe src="https://calendar.google.com/calendar/embed?src=hju5uqatv2ftqmjdilv3o8n7eg%40group.calendar.google.com&ctz=Europe%2FZurich" className='w-full h-96 border-spacing-0' />
                <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                    <img className='h-5 m-2' src="/Icons/maps.png" alt="drive logo" />
                    <a href="https://www.google.com/maps/d/edit?mid=1G0lfXT89oAAluVFxsFly1HhYR0ubjD8&usp=sharing" className=' text-neutral-500 underline' target="_blank">maps.google.com</a>
                </div>
            </div>
        </div>
    </>
  )
}
