import React from "react"

//Vedio component
const Video = (props) => {
  return (
    <div className="video-container">
      <div className="video-image">
        <img src={props.thumbnails} alt="thumbnils" />
      </div>
      <div className="video-info">
        <h3 className="header-font">{props.title}</h3>
        <h4 className="header-font">{props.dateAdded}</h4>
        <h4 className="header-font">{props.channel}</h4>
        <p className="inner-font">{props.description}</p>
      </div>
        
    </div>
  )
  };

  export default Video;