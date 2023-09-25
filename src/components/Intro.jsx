import React from 'react'
import video from '../assets/video.mp4'
import '../components/style/intro.scss'

const Intro = () => {
  return (
    <div className='intro'>
        <video src={video} muted autoPlay loop></video>
        <div className='overly'>
          <button>GET A FRENCHIES</button>
        </div>
    </div>
  )
}

export default Intro