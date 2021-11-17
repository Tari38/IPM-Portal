import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth0 } from '@auth0/auth0-react';
import { Container } from "react-bootstrap";
import LoginPage from "../../../Auth/LoginPage";

import "./Home.css";

const Home = () => {
		
		// const { isAuthenticated, login } = useAuth0();
		
		return (
		
		<div>
		<Container className="welcome-container">
			<h1>Welcome to the ShieldCrest Statement Portal!</h1>
			<br />
			<h3>To continue, please Login below.</h3>
			<hr />
			<LoginPage />
			
			{/* {isAuthenticated() ? (
				<Link to="/userdashboard">My Dashboard</Link>
			) : (
				<button onClick={login}>Login</button>
			)} */}

			<p>Once logged in, you will be taken to your private account area.</p>
		</Container>
		</div>
	
	)
 }

 export default Home;

