import React from "react";
import { Container } from "react-bootstrap";
import Login from "../auth/Login";
import "./Home.css";

const Home = () => {

	return (
		<>
		<div>
		<Container className="welcome-container">
			<h1>Welcome to the ShieldCrest Statement Portal!</h1>
			<br />
			<h3>To continue, please Login below.</h3>
			<hr />
				<div>
					<Login />
				</div>

				<p>Once logged in, you will be taken to your private account area.</p>
		</Container>
		</div>
		</>
	)
}

export default Home;
