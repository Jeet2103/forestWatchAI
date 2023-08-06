import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import Footer from "../Components/Footer";

function Home() {
  return (
    <> 
      <Navbar />
      <div id="main">

        {/* page number 1 */}

        <section  className="page hero">
          <div id="heading">
            <h1>Welcome to ForestWatchAI Website</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, nisi.</p>
            <div className="btn-box">
<<<<<<< HEAD
              <a href="/login" className="btn">
                Login
              </a>
              <a href="/signup" className="btn">
=======
              <a href="/" className="btn">
                Login
              </a>
              <a href="/" className="btn">
>>>>>>> 0e6bdd6b5d9944ecc4e2be1e73d89abe45dcdb44
                Register
              </a>
            </div>
          </div>
        </section>

        {/* page number 2 */}

        <section id="page-2" className="page ">

            <div>
                <h1>NEWS</h1>
            </div>

        </section>

        {/* page number 3 */}

        <section id="page-3"  className="page">
          <h1>Statistics</h1>
        </section>

        {/* page number 4 */}

        <section id="page-4" className="page">
          <div id="page4-con">
            <h1>Section 4</h1>
            <div id="map-weather-section">  
                <div id="map-box">
                    <h3>Map</h3>
                </div>

                <div id="weather-box">
                    <h3>Weather details</h3>
                </div>
            </div> 
          </div> 
        </section>
        
      </div>
      <Footer/>
    </>
  );
}

export default Home;
