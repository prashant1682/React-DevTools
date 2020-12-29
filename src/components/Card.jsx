import React from "react";
import Avatar from "./Avatar";
import Deatils from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Deatils deatilInfo={props.tel} />
        <Deatils deatilInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
