import React from 'react'
import VideoCard from "./VideoCard";
// import ChannelCard from "./ChannelCard";

function Videos({videos, direction}) {

  if(!videos?.length){
    return 'Loading...';
  }
  return (
    <div className= {`grid gap-4 ${direction ? direction : 'grid-cols-4'}`}>
    {videos.map((item, idx) => (
        <div key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {/* {item.snippet.channelId && <ChannelCard channelDetail={item}/>} */}
        </div>
    ))}
    </div>
  )
}

export default Videos