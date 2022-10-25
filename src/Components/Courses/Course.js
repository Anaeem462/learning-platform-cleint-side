import { getByTitle } from "@testing-library/react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Course = ({ courses }) => {
  const {
    details,
    category_id,
    _id,
    image_url,
    title,
    thumbnail_url,
    total_view,
    number,
  } = courses;
  return (
    <div className="col-4 my-4">
      <Card style={{ width: "18rem" }}>
        <div style={{ backgroundColor: "#e8e9e9" }}>
          <Card.Img
            variant="top"
            src={image_url}
            style={{ height: "200px", width: "1fr" }}
            className="p-2"
          />
        </div>
        <Card.Body>
          <Card.Title className="text-warning">{title}</Card.Title>
          <Card.Text>{details.slice(0, 50)}</Card.Text>

          <Link
            to={`/category/${category_id}`}
            className="text-decoration-none text-light text-center "
          >
            <Button variant="primary" className=" w-100">
              Course details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
