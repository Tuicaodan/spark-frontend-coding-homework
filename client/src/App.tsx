import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
