import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Listings from "./Components/Listings/Listings";

const App = () => {
  return (
    <div className="w-[90%] m-auto bg-white ">
      <Navbar />
      <SearchBar />
      <Listings />
    </div>
  );
};

export default App;
