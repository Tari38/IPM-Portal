import React from "react";

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="jumbotron centered">
        <i className="fas fa-key fa-6x"></i>
        <h1 className="display-3">Welcome to your new Dashboard!</h1>
        <p className="secret-text">
          Here, you can update your profile, view your statement or request
          statements. Just navigate using the links below.
        </p>

        <card className="card">
          <header className="card-header">
            <h3>My Profile</h3>
          </header>
          <a href="/profile" className="card-link">
            Go to my Profile
          </a>
        </card>
        <card className="card">
          <header className="card-header">
            <h3>Statements</h3>
            <a href="/viewStatements" className="card-link">
              View my Statements
            </a>
            <hr />
            <a href="/requestStatements" className="card-link">
              Request a Statement
            </a>
            <hr />
            <a href="/royaltyCalculator" className="card-link">
              Calculate my Royalties
            </a>
          </header>
        </card>

        <form action="/submit" method="GET">
          <div className="form-group"></div>
          <button type="submit" className="btn btn-dark">
            Request Statement
          </button>
        </form>
      </div>
    </div>
  );
}
