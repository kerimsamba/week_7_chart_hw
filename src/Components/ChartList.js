import React from "react";
import Song from "./Song";


const ChartList = ({ songs }) => {

    const songItems = songs.map((song, index) => {
        return (
            <Song
                key={song.id.attributes["im:id"]}
                position={index + 1}
                title={song['im:name'].label}
                artist={song['im:artist'].label}
                image={song['im:image'][1].label}
                audio={song.link[1].attributes.href}
            />
        )
    })
    return (
        <>
            <div>

                {songItems}
            </div></>
    )

}




export default ChartList;





