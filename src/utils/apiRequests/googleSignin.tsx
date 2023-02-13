import React, { useState, useEffect } from "react";

const GoogleLogin: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    loadGoogleApi().then(() => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2
          .init({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: "profile email",
          })
          .then(() => {
            const authInstance = window.gapi.auth2.getAuthInstance();
            setAuthenticated(authInstance.isSignedIn.get());
            authInstance.isSignedIn.listen((isSignedIn) => {
              setAuthenticated(isSignedIn);
            });
          });
      });
    });
  }, []);

  const loadGoogleApi = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.onload = () => {
        resolve();
      };
      document.body.appendChild(script);
    });
  };

  const handleLogin = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    authInstance.signIn().then(() => {
      setAuthenticated(true);
    });
  };

  const handleLogout = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    authInstance.signOut().then(() => {
      setAuthenticated(false);
    });
  };

  return (
    <div>
      {authenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;