import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Menubar from './Menubar';
import Videos from './Videos';

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items));

  }, [searchTerm]);

  return (
    <div className='ml-28 mx-10'>
      <Menubar setSelectedCategory={searchTerm}/>
      <br />
      <Videos videos={videos}/>
    </div>
  )
}

export default SearchFeed