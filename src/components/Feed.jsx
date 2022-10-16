import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import Videos from './Videos';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('Mixes');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));

  }, [selectedCategory]);
  return (
    <div className='ml-28 mx-10'>
      <Menubar setSelectedCategory={setSelectedCategory}/>
      <br />
      <Videos videos={videos} />
    </div>
  )
}

export default Feed