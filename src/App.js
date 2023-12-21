import "./App.css";
import React from "react";
import Recommendations from "./Components/Recommendations";
import ListByTicker from "./Components/ListByTicker";
import TrendingTickers from "./Components/TrendingTickers";
import NotFound from "./Components/NotFound";
import PopularWatchlists from "./Components/PopularWatchlists";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Recommendations />} />
        <Route path="/listByTicker" element={<ListByTicker />} />
        <Route path="/trendingTickers" element={<TrendingTickers />} />
        <Route path="/popularWatchlists" element={<PopularWatchlists />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
