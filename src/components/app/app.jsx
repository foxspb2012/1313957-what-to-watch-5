import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import MyListPage from "../pages/my-list-page/my-list-page";
import MovePage from "../pages/movie-page/movie-page";
import AddReviewPage from "../pages/add-review-page/add-review-page";
import PlayerPage from "../pages/player-page/player-page";

const App = (props) => {
  const {genreValue} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage genreValue = {genreValue}/>}/>
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/mylist" component={MyListPage} />
        <Route exact path="/films/:id" component={MovePage} />
        <Route exact path="/films/:id/review" component={AddReviewPage} />
        <Route exact path="/player/:id" component={PlayerPage} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genreValue: PropTypes.string.isRequired,
};

export default App;
