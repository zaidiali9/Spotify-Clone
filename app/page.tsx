import Image from "next/image";
import HomePage from "./home/page";
import Albums from "@/components/LatestAlbums/Albums";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
    
        <HomePage/>
        <Albums/>
    </>
  );
}
