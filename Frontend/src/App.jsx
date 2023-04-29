import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Listings from "./Components/Listings/Listings";
import { useSelector } from "react-redux";
import LoginScreen from "./pages/loginPage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <div className="w-[90%] m-auto bg-white ">
      {/* <Navbar />
      <SearchBar />
      <Listings /> */}
      <LoginScreen />
    </div>
  );
};

export default App;
