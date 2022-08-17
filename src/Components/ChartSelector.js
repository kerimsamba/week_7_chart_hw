import React from "react";

const ChartSelector = ({ genres, handleGenreChange }) => {

    const handleSelectChange = (event) => 
    {
        const selectedValue = event.target.value;
        handleGenreChange(selectedValue);
    }

    const options = genres.map(genre => {
        return (
        <option value={genre.url}> {genre.name} </option>
        )
    })

    return (
        <select className="Selector" onChange={handleSelectChange}>
            {options}
        </select>
    );
}

export default ChartSelector;