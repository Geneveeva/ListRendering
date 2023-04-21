import React from "react";
import Cards from "./Card";
import { profileData } from "../data"; 

const ListApp = () => {
  return (
    <div className="container">
      <input
        className="inputfield"
        type="text"
        placeholder="search by name..."
      ></input>
      <div className="profiles-wrapper">
        {profileData.map((profile, index) => <Cards key={profile.id} profile={profile} />)}
      </div>
      
    </div>
  );
};

export default ListApp;
