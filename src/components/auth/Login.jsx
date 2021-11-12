import React from "react";
import axios from "axios";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";
import lockIcon from "../../images/lock-solid.svg";
import userIcon from "../../images/user-solid.svg";
// import Auth from "./Auth";
import "./Login.css";

//  to safely login to the new portal to access royalty statements

const Login = () => {
	function redirect(url) {
		document.location = url;
	}
	const callApi = () => {
		axios.post("http://localhost:5000/")
		.then(res=>{
			console.log(res.data)
			redirect(res.data)
		}).catch(err=>{
			console.log(err)
		})
	}
  	return(
		<>

				<Container className="form-wrapper">
					<div className="form-header">
						<h3>Statement Portal</h3>
						<h5>by ShieldCrest</h5>
					</div>

					<Form className="form">
						<div className="form-row">
						<img id="userIcon" src={userIcon} alt="email icon"></img>
						<FloatingLabel
    					controlId="floatingInput"
    					label="Email address"
    					className="mb-3"
  					>
						<Form.Control type="email" placeholder="name@example.com"  />
 						</FloatingLabel>
						</div>
						<div className="form-row">
						<img id="lockIcon" src={lockIcon} alt="password icon"></img>
						<FloatingLabel controlId="floatingPassword" label="Password">
    				<Form.Control type="password" placeholder="Password" />
  					</FloatingLabel>
						</div>
						<Button onClick={callApi}>Login</Button>
					</Form>
				</Container>

		</>
	)
}


export default Login;