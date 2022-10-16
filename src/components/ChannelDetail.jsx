import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from "./ChannelCard";
import Videos from './Videos';

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((videoData) => setVideos(videoData?.items));

  }, [id])
  
  return (
    <div className='ml-28 mx-10'>
      <ChannelCard channelDetail={channelDetail}/>
      <br />
      <p className='text-white text-2xl'>Videos</p>
      <br />
      <Videos videos={videos}/>
    </div>
  )
}

export default ChannelDetail