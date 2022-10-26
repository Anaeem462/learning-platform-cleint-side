import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const PremiumPage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // console.log(data);
  const { _id, details, image_url, title, category_id } = data;
  return (
    <div className="p-4 text-center m-5 rounded shadow-lg ">
      <div className="row">
        <img className="col-1" src={image_url} alt="" />
        <div className="col-10">
          <h1 className=" text-success">
            {user?.displayName || "Your"} Package{" "}
          </h1>
          <img src={user?.photoURL} alt="" />
        </div>
        <img className="col-1" src={image_url} alt="" />
      </div>
      <hr />
      <h2>
        Package name: <span className="text-success">{title}</span>
      </h2>
      <p>
        Package id: <span className="text-success">{_id}</span>
      </p>
    </div>
  );
};

export default PremiumPage;
