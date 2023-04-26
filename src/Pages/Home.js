import React, { useState } from "react";
import Navbar from "../Navbar";

const Home = () => {
  const [value, setValue] = useState("Kiwi Stinkt SEHR dolle...");

  function useStateSetKappa() {
    setValue("KAPPA");
  }

  return (
    <>
      <Navbar />
      <div className="home-content">
        <h4>I hate NIGGERS</h4>
        <button onClick={useStateSetKappa}>Free Candy</button>
        <p>{value}</p>
      </div>
    </>
  );
};

export default Home;
