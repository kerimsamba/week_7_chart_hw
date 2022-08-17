import React from "react";
import ChartList from "./ChartList";

const Song = ({ position, title, artist, image, audio }) => {

    return <li>
        <p>{position}</p>
       <p> {title}</p>
        <p>{artist}</p>
        <img src={image} />
        <audio controls>
        <source src={audio}></source>
        </audio>
    </li>

}

export default Song;