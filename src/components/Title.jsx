import React, { useEffect} from 'react'

const Title = () => {
    
    useEffect(()=>{
      let interval = setInterval(()=>{
        //console.log("Fetching Api...");
      },1000)
     
        return()=>{
          console.log("UnMount")
          clearInterval(interval)
        }
    
    },[])

    
  return (
    <div className='title'>
       <h3>Form Validation</h3> 
       
    </div>
  )
}

export default Title