import React from 'react'
import Image from 'next/image'
import './styles.css'
import Navbar from '@/components/Navbar/Navbar'
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className="absolute inset-0 z-0 bg-cover bg-center image-back mb-0" >
      </div>
      <section className="relative h-screen flex items-center justify-center">
      </section>
    </>
  )
}

export default HomePage