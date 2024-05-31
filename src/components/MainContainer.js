import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

  const movies=useSelector((store)=> store.movies?.NowPlayingMovies);
  if(!movies) return;

  const mainMovie=movies[1];  
  const {original_title,overview,id}=mainMovie;


  return (
    <>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </>
  )
}

export default MainContainer;