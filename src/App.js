import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./nav/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import DashboardPage from "./pages/Dashboard";
import NothingHere from "./nav/NothingHere";

import "./App.css";

export default class App extends React.Component {
  state = {
      users: [],
    };
    componentDidMount() {
      axios.get("/userActions").then((response) => {
        this.setState({ users: response.data });
      });
    }
    render() {
      const { users } = this.state;
  return (
    <>
    <Router>
      <main className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<NothingHere />}

            {...users.map((user) => (
              <>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </>
            ))}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
 }
}
