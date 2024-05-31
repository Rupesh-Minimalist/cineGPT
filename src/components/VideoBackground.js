import { useSelector } from "react-redux";
import useTrailer from "../customHooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const vid = useSelector((store) => store.movies?.trailerVideo);
  

  useTrailer(movieId);

  return (
    <div >
      <iframe className="w-full aspect-video"
        
        src={"https://www.youtube.com/embed/" + vid?.key +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;