import React from "react";

function Cards(props) {

    return(
        <div className="cardholder">
        <div className="picture">
          <img
            src={props.profile.picture}
            alt="profilepicture"
          />
        </div>
        <div className="info">
          <h4>{props.profile.id}</h4>
          <p>{props.profile.title}. {props.profile.firstName} {props.profile.lastName}</p>
        </div>
      </div>
    )
}

export default Cards