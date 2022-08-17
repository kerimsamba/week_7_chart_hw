import React from "react";
import ChartList from "./ChartList";

const Song = ({ position, title, artist, image, audio }) => {

    return (
        <div>
            <div className="Songformat">{position} : </div>
            <div className="Songformat">{title}</div>
            <div className="Songformat">{artist}</div>
            <img className="Imagepad" src={image} />
            <audio controls className="Songformat">
                <source src={audio}></source>
            </audio>
        </div>
    )

}

export default Song;