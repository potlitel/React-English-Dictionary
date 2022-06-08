import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const Result = ({ mean, main, audio }) => {
  return (
    <>
      <div className="grid">
        <div className="box box4" style={{ textAlign: "center" }}>
          {/* Word name section */}
        </div>
        <div className="box box4" style={{ textAlign: "center" }}>
          {/* Audio section */}
        </div>
      </div>
      <Text
        fontSize="50px"
        color={main.word ? "black" : "red"}
        style={{ textAlign: "center" }}
      >
        {main.word ? (
          main.word
        ) : (
          <p>No Definitions Found for {localStorage.getItem("searchWord")}</p>
        )}
      </Text>
      {main.word ? (
        <div  style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
        <Grid
          h="200px"
          w="90%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato">
            {main.word && audio ? (
              /*<AudioPlayer
              autoPlay
              src={audio}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />*/
              <audio
                controls
                className="color m-4 text-center col-10"
                src={audio}
              ></audio>
            ) : null}
            {main.word && !audio && (
              <div className="color fs-3 text-center">Audio not found</div>
            )}
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          </GridItem>
          <GridItem colSpan={4} bg="tomato">
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          </GridItem>
        </Grid>
        </div>
      ) : null}
    </>
  );
};

export default Result;
