import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/elements/navs/NavBar";
import Footer from "./components/public/partials/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
// import Header from "./components/public/partials/Header";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import './App.css';


// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
        <Routes history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </Routes>
        </Container>
        <Footer />
      </div>
    
  );
};

export default App;