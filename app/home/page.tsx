import Footer from '@/components/Footer/Footer'
import HomePage from '@/components/HomeComponent/Home'
import AlbumList from '@/components/LatestAlbums/Albums'
import React from 'react'

const Home = () => {
  return (<>
        <HomePage/>
        <AlbumList/>
        <Footer/>
    </>
  )
}

export default Home