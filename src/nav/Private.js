import React, { Component } from "react";

export default class Private extends Component {
    state = {
        message: ""
    };

    componentDidMount() {
        fetch("/private", {
            headers: {
                Authorization: `Bearer ${this.props.auth.getAccessToken()}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response failed.");
                }
            })
            .then(response => {
                this.setState({
                    message: response.message
                });
            })
            .catch(error => {
                this.setState({
                    message: error.message
                });
            });
    }

    render() {
        return <p>{this.state.message}</p>;
    }
}
