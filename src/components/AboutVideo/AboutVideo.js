import React from 'react'
import ReactPlayer from 'react-player';


function AboutVideo() {

    return (
        <ReactPlayer url='video/for website.mp4' controls width='95%' height='auto' loop={true} volume={0.02} playing={true} />
    )
}

export default AboutVideo