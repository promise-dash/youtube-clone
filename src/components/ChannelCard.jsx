import React from 'react'
import { demoProfilePicture } from '../utils/constants'

function ChannelCard({channelDetail}) {
  return (
    <div className='w-full h-40 m-5 mt-5 mb-3 flex items-center gap-2'>
      <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} 
        className="w-40 rounded-full"
      />
      <h2 className='text-white texxt-center text-2xl'>{channelDetail?.snippet?.title}</h2>
    </div>
  )
}

export default ChannelCard