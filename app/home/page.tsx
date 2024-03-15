import React from 'react'
import Image from 'next/image'
import './styles.css'
import Navbar from '@/components/Navbar/Navbar'
const HomePage = () => {
  return (
    <>
    <Navbar/>
      <section className="relative h-screen flex items-center justify-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('assets/bg-1.jpg')" }}></div>
        
        {/* Content */}
        <div className="relative z-10 text-white text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-lg mb-8">We offer amazing services to help you achieve your goals.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</button> */}
        </div>
      </section>
    </>
  )
}

export default HomePage