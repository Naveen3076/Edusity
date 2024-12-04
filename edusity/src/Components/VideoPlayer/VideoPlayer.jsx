import React from 'react'
import './VideoPlayer.css'
import video from "../../assets/video.mp4"

const VideoPlayer = ({playState,setPlayState}) => {

  const hideVideo = ()=>{
    setPlayState(false)
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={hideVideo}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer