import React from "react";

const RichInfo = (props) => {
  let item = props.item;

  return (
    <div className="card m-2 col-md-4" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Worth: {item.worth} <br />
          Source: {item.source} <br />
          Country: {item.country} <br />
          Birth year: {item.birth_year}
        </p>
      </div>
    </div>
  );
};

export default RichInfo;
