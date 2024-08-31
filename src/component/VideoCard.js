import React from 'react'

const VideoCard = ({info}) => {
  if (!info || !info.snippet || !info.statistics) {
    return <div>Invalid video data</div>; // Fallback for invalid data
  }
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-0 mr-0  w-72 shadow'>
      <img  className='rounded-lg' src={thumbnails?.medium?.url} alt="thumnails" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>

      
    </div>
  )
}

export default VideoCard;