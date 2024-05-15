"use client";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./playlist.css";
import Link from "next/link";
import { Song } from "@/interface/song";
import Hamburger from "hamburger-react";
import axios from "axios";
import Webplayer from "../WebPlayer/Webplayer";
import { SongDB } from "@/interface/songDB";
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
function Playlist() {
  const [uri, setUri] = useState("");
  const [Data, setData] = useState<Song[]>([]);
  const [recentlyplayed, setRecentlyPlayed] = useState<SongDB[]>([]);
  const [search, setSearch] = useState("");
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  
  const addlist = async () => {
    
  }

  const removelist = () => {

  }

  const fetchdata = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: search,
        type: "tracks",
        offset: "0",
        limit: "15",
      },
      headers: {
        'X-RapidAPI-Key': 'f77c13bcc5msh43f09a564c7bab8p184410jsneb30a7124b68',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    const response = await axios
      .request(options)
      .then(function (response) {
        setData(response.data.tracks.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const fetchRecentlyPlayed = async () => {
    await axios.get("/api/recentlyplayed").then((response) => {
      setRecentlyPlayed(response.data.body);
    })
  }
  useEffect(() => {   
    fetchdata();
  }, []);

  useEffect(() => {
    fetchRecentlyPlayed();
  }, []);

  console.log("This is array", Data);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Hamburger clicked!");
    setIsOpen((prev) => !prev);
  };
  function formatDuration(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
  }
  const toggleLike = (songId: string) => {
    const newLikedSongs = new Set(likedSongs);

    if (newLikedSongs.has(songId)) {
      newLikedSongs.delete(songId);
    } else {
      newLikedSongs.add(songId);
    }

    setLikedSongs(newLikedSongs);
  };

  return (
    <>
      <div className=" sidebar fixed overflow-y-scroll inset-y-0 left-32 top-20 bg-gray-900 w-3/5 h-full z-10 ">
        <div className="relative rounded-xl shadow-md">
          <Webplayer source={uri} />
        </div>

        <div className="mt-4 ml-4 mr-4 mb-4 ">
          <div className="bg-gray-900 rounded-t-lg shadow">
            <div className="grid grid-cols-12 text-l  text-white p-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Title</div>
              <div className="col-span-3 ">Album</div>
              <div className="col-span-2">Duration</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-b-lg shadow pb-20 ">
            {Data.map((song, index) => {
              const isLiked = likedSongs.has(song.data.uri);
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 text-sm text-gray-300 hover:bg-gray-700 py-4 items-center"
                >
                  <div className="col-span-1">{index+1}</div>
                  <div className="col-span-4 flex items-center">
                    <img
                      src={song.data.albumOfTrack.coverArt.sources[0].url}
                      alt={song.data.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <div className="font-medium mr-6">{song.data.name}</div>
                    </div>
                  </div>
                  <div className="col-span-3 mr-6">
                    {song.data.albumOfTrack.name}
                  </div>
                  <div className=" ml-2 col-span-2">
                    {formatDuration(song.data.duration.totalMilliseconds)}
                  </div>
                  <button
                    className="bg-white w-6 h-6 flex items-center justify-center rounded-full shadow-md"
                    onClick={async (e) => {
                      e.preventDefault();
                      setUri(song.data.uri)
                      
                      setRecentlyPlayed([{
                        uri: song.data.uri,
                        name: song.data.name,
                        artist: song.data.albumOfTrack.coverArt.sources[0].url,
                        albumOfTrack: song.data.albumOfTrack.name,
                        duration: song.data.duration.totalMilliseconds
                      },...recentlyplayed])
                      axios.post("/api/recentlyplayed", {
                        uri: song.data.uri,
                        name: song.data.name, 
                        album: song.data.albumOfTrack.name,
                        artist: song.data.albumOfTrack.coverArt.sources[0].url,
                        duration: song.data.duration.totalMilliseconds
                      })
                    }}
                  >
                    <FaPlay className="text-gray-900 text-xs" />
                  </button>
                  <button
                    className="w-6 h-6 text-red-500 fill-current"
                    onClick={() => toggleLike(song.data.uri)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="red"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill={isLiked ? "red" : "none"}
                        onClick={isLiked ? addlist : removelist}
                        d={
                          isLiked
                            ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        }
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
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
        <div className="flex items-center w-full h-10 bg-gray-500 rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-grow h-full px-3 text-black bg-transparent focus:outline-none"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="h-full px-3 flex items-center justify-center bg-gray-600 text-gray-300 cursor-pointer"
            onClick={fetchdata}
          >
            <FaSearch />
          </div>
        </div>

        <h2 className="p-4 text-xl font-bold">Recently Played</h2>
        <ul>
          {recentlyplayed.map((song, index) => (
            <li
              key={index}
              className="flex items-center  p-4 border-b border-gray-800"
            > 
              <img
                src={song.artist}
                alt={song.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex items-center">
                <div>
                  <p className="text-s pr-12">{song.name}</p>
                </div>
              </div>  
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
