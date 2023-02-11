import React from 'react'
import { useEffect , useState} from 'react'

export default function BurgerStufe({state}) {
    
    const [display, setDisplay] = useState('hidden')

    useEffect(() => {
        state
        ?
        setDisplay('block left-64')
        :
        setDisplay('hidden left-0')
    }, [state])

  return (
    <div className={display + ' sticky top-0 h-screen'}>
        <nav className='w-72 bg-cevi-grayWhite h-screen absolute'>
            Hello
        </nav>
    </div>
  )
}
