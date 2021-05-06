import Video from "./Video";
import SearchArea from "./SearchArea";
import React from "react";
import ReactDOM from "react-dom";


//App component
const App = () => {

  return(
  <div>
    <header>
      <a href="#">MyTube</a>
    </header>
    <SearchArea></SearchArea>
    {/* <Video title="The First Vedio in MyTube" 
    dateAdded="4 days ago" 
    channel= "Your Channel"  />
    <Video title="The Cool Video" 
    dateAdded="4 days ago" 
    channel= "GoldsMine"  />
    <Video title="Motu Patlu session:4" 
    dateAdded="2 days ago" 
    channel= "Your Cartoon"  /> */}
  </div>)

  // return React.createElement("div", {}, [
  //   React.createElement("h2", {}, "MyTube"),
  //   React.createElement(video, {
  //     title: "The First Vedio in MyTube",
  //     dateAdded: "4 days ago",
  //     channel: "Your Channel",
  //   }),
  //   React.createElement(video, {
  //     title: "The Cool Video",
  //     dateAdded: "2 years ago",
  //     channel: "GoldsMine",
  //   }),
  //   React.createElement(video, {
  //     title: "Motu Patlu session:4",
  //     dateAdded: "2 hours ago",
  //     channel: "Your Cartoon",
  //   }),
  // ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
