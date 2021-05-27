
import SearchArea from "./SearchArea";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

//React router,Reach Router,Navi Router 


//App component
const App = () => {

  const themeColor = useState(``)
  return(

    <ColorContext.Provider value={themeColor}>
    <div>
      <header>
        <a href="/">MyTube</a>
      </header>
      <Router>
      <SearchArea path="/" />
      <WatchArea path="/watch/:id" />

      </Router>
    </div>
  </ColorContext.Provider>
  )

};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
