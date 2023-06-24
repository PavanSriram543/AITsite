import React from "react";
import "./cards.scss";

function Cards(props) {
  return (
    <div lg={4} md={12} sm={12}>
      <div className="p-2">
        <div className={`${props.color ? "card-2" : "card-1"} custom-card `}>
          <div>
            <span className="text-gray">BECOME A</span>
            <br />
            <span>
              <b>{props.developer} </b>
            </span>
          </div>
          <div>
            <span className="text-blue">Know More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
