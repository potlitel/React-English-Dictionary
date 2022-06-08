import { Suspense, useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Result from "./components/Results";
import LoadingSpinner from "./components/LoadingSpinner";
import { SearchButton } from "./components/SearchButton";
import * as React from 'react';
//import "./functions"

function App() {
  const [word, setWord] = useState("");
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [clic, setClic] = useState(false);
  const [searchWord, setsearchWord] = React.useState(
    localStorage.getItem("searchWord") || ""
  );

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const dataApi = async () => {
    setIsLoading(true);
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    await sleep(2000); //wait 2 seconds
    setIsLoading(false); // Hide loading screen
    if (dataJ.title != "No Definitions Found") {
      setMean(dataJ);
      console.log(dataJ);
      setMain(dataJ[0]);
      //console.log(dataJ[0]);
      const url = dataJ[0].phonetics[0].audio;
      setAudio(url);
    } else {
      setWord("");
      setMean([]);
      setMain([]);
    }
  };
  const myContainer = useRef(null);

  useEffect(() => {
    //dataApi();
    console.log("myContainer..", myContainer.current);
    // Remove
    //localStorage.removeItem('searchWord');
    //myContainer.current.innerHTML = "Alain Jorge Acuña";
  }, []);

  const Search = () => {
    dataApi();
    setClic(true);
    //JSON.stringify(searchWord);
    /*setsearchWord(word);*/
    localStorage.setItem('searchWord', word);
    setWord("");
  };

  return (
    <div>
      <div className="box box4" style={{ textAlign: "center" }}>
        <h1>English Dictionary - Type your word</h1>
      </div>
      <div id="cover" className="container-fluid">
        <form method="get" action="">
          <div class="tb">
            <div class="td">
              <input
                type="text"
                placeholder="Type your word"
                required
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
            </div>
            {word ? (
              <div>
                <SearchButton search={Search} isLoading={isLoading} />
              </div>
            ) : null}
          </div>
        </form>
      </div>
      <div ref={myContainer}>
        {word === "" ? (
          isLoading ? (
            <LoadingSpinner />
          ) : (
            clic && <Result mean={mean} main={main} audio={audio} />
          )
        ) : null}
      </div>
      {!word ? <>Hola</> : null}
    </div>
  );
}

export default App;
