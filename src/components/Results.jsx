import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Result = ({ mean, main, audio }) => {
  return (
    <>
      <div className="grid">
        <div className="box box4" style={{textAlign: "center"}}>
          {
            main.word ? main.word : <p>No Definitions Found</p>
          }
        </div>
        {/*audio ? (
            <AudioPlayer
              autoPlay
              src={audio}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )*/}
      </div>
    </>
  );
};

export default Result;
