import React from 'react'

export default function Walze() {
  return (
    <>
        <div className='bg-cevi-grayWhite w-full p-8'>
            <div className=' bg-gradient-to-r from-cevi-red to-cevi-whiteRed rounded-2xl py-6 px-8 text-cevi-white'>
                <h1 className='text-4xl font-cbold mb-4'>Vereinszeitschrift WALZE</h1>
                <div className='flex text-3xl font-cbold'>
                    <div className='bg-cevi-white rounded-2xl w-full mr-8'>
                        <iframe src="https://drive.google.com/embeddedfolderview?id=1XYMvsWx4eGm0oqw6QI9mUuIHaq068k-k#grid" className='w-full h-96 border-spacing-0' />
                        <div className='border-neutral-400 text-cevi-gray border-t flex items-center p-7'>
                            <img className='h-5 m-2' src="/Icons/drive.png" alt="drive logo" />
                            <a href="https://drive.google.com/drive/folders/1XYMvsWx4eGm0oqw6QI9mUuIHaq068k-k" className=' text-neutral-500 underline text-base font-normal' target="_blank">drive.google.com</a>
                        </div>
                    </div>
                    <div>
                        Hier finden Sie alle Ausgaben der 'WALZE' zum download als PDF. <br />
                        Sollten die Inhalte nicht korrekt angezeigt werden, so klicken SIe bitte auf den Link. <br />
                        <br />
                        <a href="https://drive.google.com/drive/folders/1XYMvsWx4eGm0oqw6QI9mUuIHaq068k-k" target="_blank" className=' underline'>Link</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
