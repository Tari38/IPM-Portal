import * as React from "react";
import { Route, Navigate } from 'react-router-dom';
import Header from "./components/partials/Header";
import Home from "./components/pages/Home";
import Auth from "./components/auth/Auth";
import Nav from "./components/Nav";
import UserDashboard from "./components/auth/private/UserDashboard";
import Callback from "./components/auth/Callback";
import Public from "./components/pages/Public";
import Private from "./components/auth/private/Private";

import Footer from "./components/partials/Footer";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.auth = new Auth(this.props.history);
    }
    render() {
        return (
            <>
              <Header />
                <Nav auth={this.auth} />
                <div className="body">
                    <Route
                        path="/"
                        exact
                        render={props => <Home auth={this.auth} {...props} />}
                    />
                    <Route
                        path="/callback"
                        render={props => (
                            <Callback auth={this.auth} {...props} />
                        )}
                    />
                    <Route
                        path="/userdashboard"
                        render={props =>
                            this.auth.isAuthenticated() ? (
                                <UserDashboard auth={this.auth} {...props} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    <Route path="/public" component={Public} />
                    <Route
                        path="/private"
                        render={props =>
                            this.auth.isAuthenticated() ? (
                                <Private auth={this.auth} {...props} />
                            ) : (
                                this.auth.login()
                            )
                        }
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default App;