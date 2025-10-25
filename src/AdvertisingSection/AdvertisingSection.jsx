import React ,{ useRef } from 'react'
import Hero from './components/Hero.jsx'
import Section1 from './components/Section-1.jsx'
import Section2 from './components/Section-2.jsx'
import Section3 from './components/Section-3.jsx'

const AdvertisingSection = () => {
   const AdRef = useRef(null); 
  return (
    <div >
    <div>
         <Hero/>  
         <Section1/>
         <Section2/>
    </div>
    <div  ref={AdRef} className=''>
         <Section3 AdRef={AdRef}/>
    </div>
    </div>
  )
}

export default AdvertisingSection
