import React from "react";

import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import Course from "./Course";

const Courses = () => {
  const allcourse = useLoaderData();
  // console.log(allcourse);
  return (
    <div>
      <div className="border border-primary mt-2 bg-primary text-white text-center  py-3">
        <h2 className=" text-extrabold ">Our courses</h2>
      </div>
      <div className="row mx-2">
        <div className="row col-xl-9 col-md-7 col-sm-12 justify-content-center my-4">
          {allcourse.map((c) => (
            <Course key={c._id} courses={c}></Course>
          ))}
        </div>
        <div className="col-xl-3 col-md-5 col-sm-12 my-2 bg-primary rounded p-3 text-light ">
          <Category></Category>
        </div>
      </div>
    </div>
  );
};

export default Courses;
