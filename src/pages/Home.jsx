import React from 'react';
import { Container } from "react-bootstrap";
import LoginPage from "../nav/Login";

import "./styles/Home.css";

const HomePage = () => {
  return (
    <>
    <div>
      <Container className="welcome-container">
        <h1>Welcome to the ShieldCrest Statement Portal!</h1>
        <br />
        <h3>To continue, please Sign In.</h3>
        <hr />
        <p>You will then be taken to your private dashboard.</p>
        <LoginPage />
      </Container>
    </div>
    </>
  );
 }

export default HomePage;
