import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Landing, Auth, Home, Editor } from "./pages";
import { myAuth } from "./states";

const App = () => {
  const isAuth = myAuth((state) => state.auth.isAuth);
  return (
    <div>
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <Landing />} />
        <Route
          path="/auth"
          element={!isAuth ? <Auth /> : <Navigate to="/" />}
        />
        <Route
          path="/editor"
          element={isAuth ? <Editor /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default App;
