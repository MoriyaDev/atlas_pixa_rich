import React, { useEffect, useState } from "react";
import axios from "axios";
import RichInfo from "./RichInfo";

const RichList = () => {
  const [richPeople, setRichPeople] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = "https://expressrichpepole.onrender.com/"; // 👈 בלי /rich
    try {
      let resp = await axios.get(url);
      console.log("Data:", resp.data);
      setRichPeople(resp.data);
    } catch (err) {
      console.log("Error:", err);
      alert("Oops, failed to load data");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Rich People List</h2>
      <div className="row">
        {richPeople.map((item) => (
          <RichInfo key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RichList;
