import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS);
    const data = await response.json();
    console.log(data);
    setVideos(data?.items);
  };

  return (
    <div className='flex flex-wrap  justify-normal'>
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
  <VideoCard key={video.id} info={video} />
</Link>
      ))}
    </div>
  );
}

export default VideoContainer;
