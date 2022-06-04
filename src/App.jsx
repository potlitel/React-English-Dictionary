import { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Result from "./components/Results";
import LoadingSpinner from "./components/LoadingSpinner";
import { SearchButton } from "./components/SearchButton";
//import "./functions"

function App() {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const dataApi = async () => {
    setIsLoading(true);
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    await sleep(2000); //wait 5 seconds
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

  useEffect(() => {
    //dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <div>
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
              <SearchButton search={Search} isLoading={isLoading} />
            ) : null}
          </div>
        </form>
      </div>
      <div>
        {word === "" ? (
          isLoading ? (
            <LoadingSpinner />
          ) : (
            <Result mean={mean} main={main} audio={audio} />
          )
        ) : (
          <div className="box box4" style={{ textAlign: "center" }}>
            <h1>English Dictionary - Type your word</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
