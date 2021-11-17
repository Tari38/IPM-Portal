import React from "react";
import logo from '../../../images/ShieldCrest-new-logo.png';
import NavBar from "../../elements/navs/NavBar";
import "./Header.css";

export default function Header() {

	return (

		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				</header>
				<NavBar />
		</div>
	);
}