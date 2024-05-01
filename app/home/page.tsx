import HomePage from '@/components/HomeComponent/Home'
import AlbumList from '@/components/LatestAlbums/Albums'
import QuickMessage from '@/components/QuickMessage/QuickMessage'
import WhatsNew from '@/components/WhatsNew/WhatsNew'
import Footer from '@/components/footer/footer'
import Player from '@/components/MusicPlayer/Player'
import React from 'react'

const Home = () => {
  return (<>
        <HomePage/>
        <AlbumList/>
        <WhatsNew/>
        <QuickMessage/>
        <Player/>
        <Footer/>
    </>
  )
}

export default Home