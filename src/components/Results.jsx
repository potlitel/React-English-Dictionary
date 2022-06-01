import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Result = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row dark-theme">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline mb-4">
            {main.word}
          </div>
          {audio ? (
            <AudioPlayer
              autoPlay
              src={audio}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
