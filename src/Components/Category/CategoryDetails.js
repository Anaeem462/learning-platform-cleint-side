import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDownload } from "react-icons/fa";

const CategoryDetails = () => {
  const category = useLoaderData();
  // console.log(category);
  const { title, thumbnail_url, details } = category;
  return (
    <div>
      <Card className="m-5">
        <Card.Header className="d-flex fs-2 text-extrabold text-primary text-center ">
          <div className="col-11">{title}</div>
          <div className="col-1 text-center">
            <FaDownload></FaDownload>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Img
            variant="top"
            src={thumbnail_url}
            style={{ height: "500px", width: "1fr" }}
            className="p-2"
          />
          <Card.Text>{details}</Card.Text>
          <Link to="/premium-page" className="text-decoration-none">
            {" "}
            <Button className="w-100">Get premium access</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryDetails;
