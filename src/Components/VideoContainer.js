import React, { useEffect, useState } from 'react'
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
    <div className='flex flex-wrap  ml-72'>
      {videos.map(video=>{
         return <VideoCard key={video.id} info={video}/>
      })}
    </div>
  )
}
