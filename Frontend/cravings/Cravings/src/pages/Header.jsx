import { useState } from "react";
import Cravingslogo from "./images/Cravingslogo.png";
import herosectionbackground from "./images/herosectionbackground.jpg";
import Two from "./images/Two.jpg";
import Three from "./images/Three.webp";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <>
      <header className="p-3 text-light d-flex align-items-center justify-content-between">
        <div className="px-3">
          <img className="" src={Cravingslogo} alt="" />
        </div>
        <div className="d-flex gap-2 mx-4">
          <button className=" px-3 py-1 bg-transparent loginButton">
            Login
          </button>
          <button className=" px-3 py-1 registerButton">Register</button>
        </div>
      </header>

      {/* hero section */}
      <section className="heroSection d-flex justify-content-center align-items-center">
        {/* <img id="herosectionbackground" src={herosectionbackground} alt=""/> */}
        <div className=" text-light w-50 p-2">
          <h1 className="text-center fw-bolder">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>
          <p className="text-center opacity-75 fs-5 mb-4">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <button
              id="heroSectionSignupButton"
              className="px-4 py-2 rounded fw-medium"
            >
              Sign Up
            </button>
            <button
              id="heroSectionOrderNowButton"
              className="px-4 py-2 rounded fw-medium"
            >
              Order Now
            </button>
          </div>
          <div className=" border-4 p-2 rounded-3 w-100">
            <div className="d-flex bg-white text-black rounded border-0">
              <FaSearch className="searchIcon my-auto mx-2" />
              <input
                type="text"
                className="form-control shadow-none border-0 p-2"
                placeholder=" search restaurant or cuisines..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;