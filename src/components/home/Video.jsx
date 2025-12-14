import React from 'react'

const Video = () => {
  return (
    <div className="relative h-full w-full">
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  )
}

export default Video