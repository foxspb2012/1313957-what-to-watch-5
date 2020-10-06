import React from "react";
import PropTypes from "prop-types";
import MainPage from "../pages/main-page/main-page";

const App = (props) => {
  const {genreValue} = props;
  return (
    <MainPage genreValue = {genreValue}/>
  );
};

App.propTypes = {
  genreValue: PropTypes.string.isRequired,
};

export default App;
