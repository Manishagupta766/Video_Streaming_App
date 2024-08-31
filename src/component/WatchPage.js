import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../Utils/appSlice';
import CommentsConatiner from './CommentsConatiner';
import LiveChat from './LiveChat';
import MainContainer from './MainContainer';

function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  console.log(videoId);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='flex flex-col '>
      <div className="px-5 p-11 flex">
        <div className=''>
        <iframe
          width="980"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='rounded-lg'
        ></iframe>
      </div>
      <div className='w-full'>
        <LiveChat />
      </div>
      
      </div>
      <div className='flex mt-2'>
        <div className='w-2/4'>
          <CommentsConatiner />
        </div>
        {/* <div className='w-[3/4]'>
          <MainContainer/>
        </div> */}
      </div>
    </div>
  );
}

export default WatchPage;
