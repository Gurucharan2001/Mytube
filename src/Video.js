import { Link } from "@reach/router";
import React from "react"
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en)

//Vedio component
const Video = (props) => {
  const timeAgo = new TimeAgo("en-us")
  const dateAdded = new Date(props.dateAdded)
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <div className="video-image">
        <img src={props.thumbnails} alt="thumbnils" />
      </div>
      <div className="video-info">
        <h3 className="header-font">{props.title}</h3>
        <h4 className="header-font">{timeAgo.format(dateAdded)}</h4>
        <h4 className="header-font">{props.channel}</h4>
        <p className="inner-font">{props.description}</p>
      </div>
        
    </Link>
  )
  };

  export default Video;