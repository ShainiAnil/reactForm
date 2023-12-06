import { useState } from 'react'

import './App.css'
import Title from './components/Title'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'

function App() {
  const [toggle,setToggle] = useState(true)

  return (
    <>
    <div className='title-display'>
    {toggle && <Title/>}
    <button onClick={()=>{setToggle(prev=>!prev)}}>Toggle</button>
    </div>
    {toggle && <FormOne />}
    {!toggle && <FormTwo />}
   
    </>
  )
}

export default App
