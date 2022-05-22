import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import NoResourcesPage from "./pages/NoResourcesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import UselessPage from "./pages/UselessPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/uselesspage" element={<UselessPage />} />
          <Route path ="/*" element={<NoResourcesPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
