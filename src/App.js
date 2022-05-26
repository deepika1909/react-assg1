import './App.css';
import Example from './components/TableData';
import { React, useState } from "react";
import TextField from "@mui/material/TextField";


function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText);
  };
  
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={inputHandler}
        />
      </div>
      <Example searchData={inputText}/>
    </div>
  );
}

export default App;
