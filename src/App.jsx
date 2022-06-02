import { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Result from "./components/Results";
import LoadingSpinner from "./components/LoadingSpinner";
//import "./functions"

function App() {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /*$(document).ready(function () {
    var submitIcon = $(".searchbox-icon");
    var inputBox = $(".searchbox-input");
    var searchBox = $(".searchbox");
    var isOpen = false;
    submitIcon.click(function () {
      if (isOpen == false) {
        searchBox.addClass("searchbox-open");
        inputBox.focus();
        isOpen = true;
      } else {
        searchBox.removeClass("searchbox-open");
        inputBox.focusout();
        isOpen = false;
      }
    });
    submitIcon.mouseup(function () {
      return false;
    });
    searchBox.mouseup(function () {
      return false;
    });
    $(document).mouseup(function () {
      if (isOpen == true) {
        $(".searchbox-icon").css("display", "block");
        submitIcon.click();
      }
    });
  });
  function buttonUp() {
    var inputVal = $(".searchbox-input").val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
      $(".searchbox-icon").css("display", "none");
    } else {
      $(".searchbox-input").val("");
      $(".searchbox-icon").css("display", "block");
    }
  }

  function searchToggle(obj, e) {
    var container = $(obj).closest(".search-wrapper");
    if (!container.hasClass("active")) {
      container.addClass("active");
      e.preventDefault();
    } else if (
      container.hasClass("active") &&
      $(obj).closest(".input-holder").length == 0
    ) {
      container.removeClass("active");
      // clear input
      container.find(".search-input").val("");
    }
  }*/

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
      console.log(dataJ[0]);
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
              <div class="td" id="s-cover">
                <button onClick={Search} disabled={isLoading}>
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
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
          <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra">
            English Dictionary
          </div>
        )}
      </div>

      {/*<div class="container">
        <form class="searchbox">
          <input
            type="search"
            placeholder="Search......"
            name="search"
            class="searchbox-input"
            onkeyup="buttonUp();"
            required
          />
          <input type="submit" class="searchbox-submit" value="GO" />
          <span class="searchbox-icon">GO</span>
        </form>
      </div>*/}
      {/*<div class="search-wrapper">
        <div class="input-holder">
          <input
            type="text"
            class="search-input"
            placeholder="Type to search"
          />
          <button class="search-icon" onClick={(event)=>searchToggle(this,event)}>
            <span></span>
          </button>
        </div>
        <span class="close" onClick={(event)=>searchToggle(this,event)}></span>
      </div>*/}
    </div>
  );
}

export default App;
