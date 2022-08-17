import React from "react";
import ChartList from "./ChartList";

const Song = ({ position, title, artist }) => {

    return <li>
        {position}
        {title}
        {artist}
    </li>

}

export default Song;