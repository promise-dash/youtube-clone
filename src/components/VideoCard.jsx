import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoThumbnailUrl, demoVideoTitle } from '../utils/constants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function VideoCard({ video: { id: {videoId}, snippet } }) {
  return (
    <div className='flex flex-col gap-2 text-white w-full'>
      <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
       <div className='w-full h-40'>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            className="w-full h-full object-cover"
          />
       </div>
        <p className='text-white'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
      </Link>

      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/channel/UClVrJwcIy7saPcGc1nct80A'}>
        <div>
          <span className='text-neutral-400 text-sm'>{snippet?.channelTitle || demoChannelTitle}</span>
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </div>
      </Link>
      <br />
    </div>
  )
}

export default VideoCard








// const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
//   <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
//     <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
//       <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
//         sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
//       />
//     </Link>
//     <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
//         <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
//           {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
//         </Typography>
//       </Link>
//       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
//         <Typography variant="subtitle2" color="gray">
//           {snippet?.channelTitle || demoChannelTitle}
//           <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//         </Typography>
//       </Link>
//     </CardContent>
//   </Card>
// );
