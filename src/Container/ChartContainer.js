import React, { useEffect, useState } from "react";
import ChartList from "../Components/ChartList";
import ChartSelector from "../Components/ChartSelector";

const ChartContainer = () => {
    const [songs, setSongs] = useState([]);

    const genres = [
        {
            name: "All",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        },
        {
            name: "Rock",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
        },
        {
            name: "Dance",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
        },
        {
            name: "Country",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
        }
    ];

    const handleGenreChange = (url) => {
        getSongs(url);
    }

    useEffect(() => {
        getSongs(genres[0].url);
    }, [])

    const getSongs = function (url) {
        fetch(url)
            .then(res => res.json())
            .then(music => setSongs(music.feed.entry))
    }

    return (<div>

        <h2>Choose your chart: <ChartSelector handleGenreChange={handleGenreChange} genres={genres} />
        </h2>
        <ChartList songs={songs} />

    </div>)


}




export default ChartContainer;

