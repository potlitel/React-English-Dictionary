import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Result = ({ mean, main, audio }) => {
  return (
    <>
      <div className="grid">
        <div className="box box4" style={{ textAlign: "center" }}>
          {main.word ? main.word : <p>No Definitions Found</p>}
        </div>
        
        
        
      </div>
    </>
  );
};

export default Result;
