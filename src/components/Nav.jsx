import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/public">Public</Link>
                    </li>
                    {isAuthenticated() && (
                        <li>
                            <Link to="/private">Private</Link>
                        </li>,
												<li>
														<Link to="/userdashboard">My Dashboard</Link>
												</li>
                    )}
                    <li>
                        <button onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}