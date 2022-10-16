import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setRelatedVideos(data.items))

  }, [id])
  return (
    <div className='ml-28 mx-10 my-5 flex gap-5 text-white'>
      <div className='flex basis-4/5 flex-col'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls playing={true}
          className="react-player"
        />
        <br />
        <p className='text-2xl'>{videoDetail?.snippet?.title}</p>
        <br />
        
        <div className='flex gap-2 items-center justify-start'>
          <p>{videoDetail?.snippet?.channelTitle}</p>
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </div>
        <br />
        <span>Description</span>
        <p className='text-sm text-neutral-300'>{videoDetail?.snippet?.description}</p>
      </div>

      <div className='flex basis-1/5 flex-col'>
      <br />
        <Videos videos={relatedVideos} direction="grid-cols-1"/>
      </div>
    </div>
  )
}

export default VideoDetail