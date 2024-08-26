import React from 'react';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";

function Motion() {
    const videoId = "g_-E4TnyDYc"; // Extracted from the YouTube link

    // Options for the YouTube player
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0, // Set to 1 to autoplay the video
        },
    };

    return (
        <>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
            </a>
            <div className='video-wrapper'>
                <YouTube videoId={videoId} opts={opts} />
                <p>
                    WHITE SANDS - Director / Videographer / Editor
                </p>
            </div>
        </>
    );
}

export default Motion;
