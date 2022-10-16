import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail"
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-900">
        <Navbar /> 
        <Sidebar />
        <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
