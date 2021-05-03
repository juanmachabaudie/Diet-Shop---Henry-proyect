import Match from "./match";
import "./Styles.css";
import React, { useEffect, useState } from "react";

function Autocomplete({ products, name, handleChange , listen}) {
  const [state, setState] = useState({
    results: [],
    update: true
  })

  useEffect(() => {
    if (state.update) {
      return onSearch(name)
    }
    setState({
      ...state,
      update: true
    })
  }, [name])

  const matchName = (nombre, str) => {
    var keyLen = str.length;
    nombre = nombre.toLowerCase().substring(0, keyLen);
    if (str === "") return false;
    return nombre === str.toLowerCase();
  };

  const onSearch = text => {
    setState({
      ...state,
      results: products.slice().filter(item => true === matchName(item.name, text))
    });
  };

  const handleClick = (value) => {
    handleChange(value)
    console.log("VAL", value)
    setState({
      ...state,
      results: [],
      update: false
    })
  }

  const updateField = (name, value) => {
    if (name === "name") {
      handleChange(value);
    } else {
      setState({
        [name]: value
      })
    }
  };

  return (
    <div className="App">
      <Match
        results={state.results}
        name={name}
        updateField={updateField}
        handleClick={handleClick}
        listen={listen}
      />
    </div>
  );
}


export default Autocomplete;