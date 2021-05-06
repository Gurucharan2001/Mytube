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
  </div>)

};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
