import React from 'react'

export default function VideoCard({info}) {
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  return (
    
    <div className='p-2  w-72 '>
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt="Video thumbnail"/>
      <ul>
        <li className='font-bold h-16 title'>{title}</li>
        <li>{channelTitle}</li>
        <li>{
             (Math.round(statistics.viewCount/Math.pow(10,6)>1))?`${(statistics.viewCount/1000000).toFixed(2)}M`:`${Math.round(statistics.viewCount/1000)}K`
             } views</li>
      </ul>
    </div>
  )
}
