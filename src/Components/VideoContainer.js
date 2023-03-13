import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YOUTUBE_API_KEY from '../Utils/constants'
import VideoCard from './VideoCard'

export default function VideoContainer() {

  const [videos,setVideos]=useState([])

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_API_KEY);
    const json=await data?.json();
    setVideos(json?.items);
  }
  useEffect(()=>{
    getVideos();
  },[])
  if(videos.length===0){
    return null;
  }
  return (
    <div className='flex flex-wrap mx-6 py-10 '>
      {videos.map(video=>{
         return (<Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>)
      })}
    </div>
  )
}
