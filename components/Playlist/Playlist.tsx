"use client";
import React, { useState } from "react";
import "./playlist.css";
import Link from "next/link";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Hamburger from "hamburger-react";
import { UserButton } from "@clerk/nextjs";

const playlists = [
  {
    artist: "WILL I AM",
    songs: 100,
    title: "first",
    image: "/assets/a1.jpg",
  },
  {
    artist: "THE CURE",
    songs: 100,
    title: "Second",
    image: "/assets/a2.jpg",
  },
  {
    artist: "DJ SMITH",
    songs: 100,
    title: "Third",
    image: "/assets/a3.jpg",
  },
  {
    artist: "THE USTOPABLE",
    songs: 100,
    title: "fourth",
    image: "/assets/a4.jpg",
  },
  {
    artist: "BEYONCE",
    songs: 100,
    title: "fifth",
    image: "/assets/a5.jpg",
  },
  {
    artist: "BEYONCE",
    songs: 100,
    title: "sixth",
    image: "/assets/a6.jpg",
  },
  {
    artist: "BEYONCE",
    songs: 100,
    title: "fifth",
    image: "/assets/a5.jpg",
  },
  {
    artist: "BEYONCE",
    songs: 100,
    title: "sixth",
    image: "/assets/a6.jpg",
  },
];
const first = [
  {
    image: "/assets/laal-ishq.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    image: "/assets/a2.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a3.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a4.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/laal-ishq.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "laal Ishq",
    image: "/assets/laal-ishq.jpg",
    artist: "Arijit Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
];
const second = [
  {
    image: "/assets/a1.jpg",
    name: "9:45",
    artist: "Prabh Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "second",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Excuses",
    image: "/assets/a3.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    image: "/assets/a1.jpg",
    name: "9:45",
    artist: "Prabh Singh",
    date: "3 days ago",
    duration: "4:16",
    album: "second",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Excuses",
    image: "/assets/a3.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
    date: "3 days ago",
    duration: "4:16",
    album: "first",
  },
];
const favsongs = [
  {
    image: "/assets/laal-ishq.jpg",
    name: "laal Ishq",
    artist: "Arijit Singh",
  },
  {
    name: "Summer High",
    image: "/assets/a5.jpg",
    artist: "AP Dhillon",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
  },
  {
    image: "/assets/a2.jpg",
    name: "with you",
    artist: "AP Dhillon",
  },
  {
    name: "laal Ishq",
    image: "/assets/a5.jpg",
    artist: "Arijit Singh",
  },
  {
    name: "wo Noor",
    image: "/assets/a4.jpg",
    artist: "AP Dhillon",
  },
];
function Playlist() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Hamburger clicked!");
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className=" sidebar fixed overflow-y-scroll inset-y-0 left-32 top-20 bg-gray-800 w-3/5 h-full z-10 ">
        <div className="relative top-2 left-2 right-2 h-1/2 rounded-lg shadow-md">
          <div className="absolute inset-0 bg-[url('/assets/laal-ishq.jpg')] bg-cover bg-center rounded-lg"></div>
          <h2 className="absolute top-2 left-2 text-white text-xl bg-black bg-opacity-50 px-2 py-1 rounded">
            {playlists[0].title}
          </h2>
          <button className="absolute bottom-2 left-4 px-6 py-2 text-white font-bold rounded-full cursor:pointer hover:bg-gray-900 border border-white">
            Follow Artist
          </button>
        </div>

        <h1 className="text-xl font-bold text-white mt-4 ml-4">
          Recently Played
        </h1>

        <div className="mt-4 ml-4 mr-4">
          <ul className="flex overflow-x-auto">
            {playlists.map((playlist, index) => (
              <li key={index} className="inline-block mr-4">
                <Link href={`/playlists/${playlist.title}`}>
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm text-white">{playlist.title}</p>
                    <p className="text-xs text-gray-400">{playlist.artist}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 ml-4 mr-4 mb-4 ">
          <div className="bg-gray-700 rounded-t-lg shadow">
            <div className="grid grid-cols-12 text-xs font-semibold text-black p-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3">Album</div>
              <div className="col-span-2">Date added</div>
              <div className="col-span-2">Duration</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-b-lg shadow ">
            {first.map((song, index) => (
              <div
                key={index}
                className="grid grid-cols-12 text-sm text-black hover:bg-gray-700 p-4 items-center"
              >
                <div className="col-span-1">{index + 1}</div>
                <div className="col-span-4 flex items-center">
                  <img
                    src={song.image}
                    alt={song.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="font-medium">{song.name}</div>
                    <div className="text-black">{song.artist}</div>
                  </div>
                </div>
                <div className="col-span-3">{song.album}</div>
                <div className="col-span-2">{song.date}</div>
                <div className="col-span-2">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`sidebar fixed  top-10 left-0 h-screen text-white overflow-y-auto  transition-all duration-900 ease-in-out z-20 ${
          isOpen ? "w-64" : "w-30"
        }`}
      >
        <h1 className="pl-5">Your playlists</h1>

        <ul className={` bg-black mt-4 ${isOpen ? "pl-5" : "pl-2"}`}>
          <div className="bg-black  top-0 left-0 p-2">
            <Hamburger toggled={isOpen} toggle={toggleSidebar} color="white" />
          </div>
          {playlists.map((playlist, index) => (
            <li key={index} className="mb-2 flex items-center">
              <Link href={`/playlists/${playlist.title}`}>
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="block w-20 h-20 object-cover mr-6"
                />
              </Link>
              {isOpen && (
                <Link href={`/playlists/${playlist.title}`}>
                  <div>
                    <p className="text-sm">{playlist.title}</p>
                    <p className="text-xs text-gray-400">
                      {playlist.songs} songs
                    </p>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar fixed top-20 right-0 h-full bg-gray-900 text-white overflow-y-auto z-10 w-[30vw]">
        <h2 className="p-4 text-xl font-bold">Favorites</h2>
        <ul>
          {favsongs.map((song, index) => (
            <li
              key={index}
              className="flex items-center  p-4 border-b border-gray-800"
            >
              <img
                className="w-12 h-12 object-cover mr-4"
                src={song.image}
                alt={song.name}
              />
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">{song.name}</p>
                  <p className="text-sm">{song.artist}</p>
                </div>

                <svg
                  className="w-6 h-6 absolute right-6 text-red-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
