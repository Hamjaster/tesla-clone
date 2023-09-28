import React from 'react'

export default function Video() {
    return (
        <video id='video-id' preload='auto' loop={true} autoPlay={true} muted={true} playsInline={true} className='h-full w-full object-cover absolute top-0 -z-50' src='/main.mp4'></video>
    )
}
