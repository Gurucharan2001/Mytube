
import SearchArea from "./SearchArea";
import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import WatchArea from "./WatchArea";

//React router,Reach Router,Navi Router 


//App component
const App = () => {

  return(
  <div>
    <header>
      <a href="#">MyTube</a>
    </header>
    <Router>
    <SearchArea path="/" />
    <WatchArea path="/watch/:id" />

    </Router>
  </div>)

};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
