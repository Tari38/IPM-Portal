import React from "react";
import "./shared/LoadingSpinner.css";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const LoadingSpinner = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default LoadingSpinner;