import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../Utils/appSlice';
import { YOUTUBE_API_KEY_RELATED } from '../Utils/constants';

const WatchPage = () => {

  const [videos,setVideos]=useState([]);
  const[searchParams]=useSearchParams()
  console.log(searchParams.get("v"));  


  const getrelatedVideos=async ()=>{
      const key=YOUTUBE_API_KEY_RELATED.replace("%VIDEO_ID%",searchParams.get("v"));
      const data=await fetch(key);
      const json=await data.json();
      const updatedjson=json.items.map(item=>{
        item.id=item.id.videoId;
        return item;
      })
      console.log(json);
  }

  const dispatch=useDispatch();
  useEffect(()=>{
    getrelatedVideos()
    dispatch(closeMenu());
  },[])

  return (
    <div className='flex flex-col sm:flex-row'>
    <div className='w-[38rem] h-[14rem]  sm:w-[64rem] sm:h-[36rem]'>
        <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/"+searchParams.get("v")}
            title="Youtube Video player"
            FrameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        />
    </div>
    <div className='flex flex-col'>
        <div className='p-2  w-72 '>
            
        </div>
    </div>
    </div>
  )
}

export default WatchPage
