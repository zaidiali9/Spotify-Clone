import Image from "next/image";
import HomePage from "./home/page";
import Navbar from "@/components/Navbar/Navbar";
import AlbumList from "@/components/LatestAlbums/Albums";

export default function Home() {
  return (
    <>
        <HomePage/>
        <AlbumList/>

    </>
  );
}
