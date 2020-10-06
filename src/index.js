import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const Settings = {
  GENRE: `Horror`
};

ReactDom.render(
    <App
      genreValue = {Settings.GENRE}
    />,
    document.querySelector(`#root`)
);
