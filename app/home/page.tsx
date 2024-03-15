import React from 'react'
import Image from 'next/image'
import './styles.css'
const HomePage = () => {
  const imagestyle={
    
  }
  return (
    <>
      <Image src={"/assets/bg-1.jpg"} alt="" fill objectFit='cover' style={imagestyle} />
    </>
  )
}

export default HomePage