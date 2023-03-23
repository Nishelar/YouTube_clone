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
        {statistics &&
        <li>{
            (parseInt(statistics.viewCount)).toLocaleString()
             } views</li>}
      </ul>
    </div>
  )
}
