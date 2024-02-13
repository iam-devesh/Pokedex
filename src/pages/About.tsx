import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/devesh.jpeg";
import {FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Devesh Kumar</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for comparision of different pokemons
      </h4>
      <div className="profile-links">
        <a href="https://github.com/iam-devesh">
          <FaGithub />
        </a>
        
      </div>
    </div>
  );
}

export default Wrapper(About);
