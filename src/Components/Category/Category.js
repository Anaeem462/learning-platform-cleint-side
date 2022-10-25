import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const Category = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://course-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div className="">
      <h1 className="text-center mb-3">All Category</h1>
      <div className="  ms-3">
        {categories.map((cate) => (
          <Link
            key={cate.id}
            to={`/category/${cate.id}`}
            className="text-decoration-none text-light"
          >
            <li className="list-group-item my-2 fs-4 bg-warning  rounded p-2">
              {cate.name}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
