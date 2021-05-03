import React from "react";
import { TextField } from '@material-ui/core';
import useStyles from "../searchBar/Styles.js";

const Match = ({ results, name, updateField, handleClick, listen }) => {

    const classes = useStyles();

    var updateText = text => {
        updateField("name", text);
    };

    var renderResults = results.map(({ position, name }, index) => {
        return (
            <SearchPreview
                key={index}
                index={index}
                updateText={updateText}
                position={position}
                name={name}
                handleClick={handleClick}
            />
        );
    }); 
    

    return (
        <div className="auto">
            <TextField
                InputProps={{ className: classes.TextInput }} InputLabelProps={{ className: classes.TextInput }} id="standard" label="Buscar..."
                value={name || listen}
                onChange={e => updateField("name", e.target.value)}
            />
            {results.length > 0 ? (
                <div className="search-results">{renderResults}</div>
            ) : null}
        </div>
    );
};

const SearchPreview = ({ name, index, updateText, handleClick }) => {
    return (
        <button
            value={name}
            onClick={(e) => {
                e.preventDefault()
                updateText(e.target.value)
                handleClick(e.target.value)
            }}
            className={`search-preview ${index === 0 ? "start" : ""}`}
        >
            {name}
        </button>
    );
};

export default Match;