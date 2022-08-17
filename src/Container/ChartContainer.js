import React, {useEffect, useState} from "react";
import ChartList from "../Components/ChartList";

const ChartContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res =>res.json())
        .then(music => setSongs(music.feed.entry))
    }

    return (<div>   
        <ChartList songs={songs}/>;  
        </div>)


}




export default ChartContainer;

