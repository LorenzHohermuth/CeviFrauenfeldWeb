import React from 'react'
import { Link } from 'react-router-dom'

const stufenKnaben = ["Thabor","Karthago","Tigris"]
const stufenMaedchen = ["Naftali","Kalaya","Tigris"]

export default function Stufe() {

    function stufeNamenKnaben(year){
        let diffrence = 0;
        let todayString = new Date().toLocaleDateString()
        let todoyArray = todayString.split('/');
        const refDate = "8/13/2022"
        let refDateArray = refDate.split('/');
        if(todayString[2] > refDateArray[2] || todayString[1] > refDateArray[1] || todayString[0] > refDateArray[0]){
            diffrence = todayString[2] - refDateArray[2]
        }
        console.log(diffrence)
    }

  return (
    <div className='bg-cevi-grayWhite w-full p-8 font-cbold grid grid-cols-1'>
        <div className='bg-gradient-to-r from-cevi-red to-cevi-whiteRed rounded-2xl py-6 px-8 text-cevi-white text-3xl mb-6'>
            <div className='text-4xl mb-6'>Unsere Jungschar-Abteilung</div>
            Der Cevi Frauenfeld besteht aus 8 Stufen, die nach Alter und Geschlecht (ausser Fröschli und Stufe 8) eingeteilt sind. <br />
            Die Abteilungsleitung leitet gemeinsam mit den Stufenleitern die Jungschar. <br />
            Die Jungschar wird getragen vom Verein, der vor allem die finanziellen Mittel und das Cevihaus verwaltet. <br />
        </div>
        <div className='py-6 px-8 text-cevi-gray text-3xl'>
            <div className='text-4xl mb-6'>Organisation (Schuljahr 21/22)</div>
            <div className=' grid grid-cols-4'>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>Schulklasse der Kinder in der Stufe</div>
                <div className='flex justify-center items-center m-3 py-12 px-8'>Mädchenstufen</div>
                <div className='flex justify-center items-center m-3 py-12 px-8'>Knabenstufen</div>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>Kindergarten, 1.+2. Klasse</div>
                <Link to='froeschli' className='flex justify-center items-center m-3 py-12 px-8 col-span-2 bg-cevi-white underline rounded-2xl'>Fröschli</Link>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>3. und 4. Klasse</div>
                <Link to='naftali' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Naftali</Link>
                <Link to='thabor' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Thabor</Link>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>5. und 6. Klasse</div>
                <Link to='kalaya' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Kalaya</Link>
                <Link to='karthago' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Karthago</Link>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>7. und 8. Klasse</div>
                <Link to='sinai' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Sinai</Link>
                <Link to='tigris' className='flex justify-center items-center m-3 py-12 px-8 bg-cevi-white underline rounded-2xl'>Tigris</Link>
                <div className='flex justify-center items-center m-3 py-12 px-8 col-span-2'>Beeinträchtigung ab 8 Jahren</div>
                <Link to='stufe8' className='flex justify-center items-center m-3 py-12 px-8 col-span-2 bg-cevi-white underline rounded-2xl'>Stufe 8</Link>
            </div>
        </div>
        <button onClick={stufeNamenKnaben(0)}>test</button>
    </div>
  )
}
