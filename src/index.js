import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from '@react-oauth/google';

const YOUR_GOOGLE_CLIENT_ID = "285627652766-iib8mas7iueehn2jaurv6guhtoh0pokt.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the root.render() call with GoogleOAuthProvider
root.render(
  <GoogleOAuthProvider clientId={YOUR_GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
);

reportWebVitals();
