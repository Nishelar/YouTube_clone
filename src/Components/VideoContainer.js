import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import YOUTUBE_API_KEY from '../Utils/constants'
import { setVideos } from '../Utils/videoSlice'
import VideoCard from './VideoCard'

export default function VideoContainer() {

  const dispatch=useDispatch()
  const videos=useSelector(store=>store.video.Videos);
  //const [videos,setVideos]=useState([])

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_API_KEY);
    const json=await data?.json();
    const data1=await fetch("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyDul_oG9UNygXiV5DPnbuCBLX0a3c3tksM");
    const json1=await data1.json();
    console.log(json1);
    //setVideos(json?.items);
    dispatch(setVideos(json.items));
    //console.log(videosList);
  }

  
  useEffect(()=>{
    getVideos();
  },[])
  
  if(videos.length===0){
    return null;
  }
  return (
    <div className='flex flex-wrap justify-center py-2 '>
      {videos.map(video=>{
         return (<Link key={video.id } to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>)
      })}
    </div>
  )
}
