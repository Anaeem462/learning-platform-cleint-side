import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Card from "react-bootstrap/Card";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center mt-5">
      <Card style={{ width: "25rem" }} className="shadow-lg">
        <Card.Body>
          <Card.Title>
            <span className="text-dark fs-5 font-extrabold">User: </span>
            <span className="text-success fs-6 ">{user?.displayName}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <img src={user?.photURL} alt="" />
          </Card.Subtitle>
          <Card.Text>
            <p>
              <span className="text-dark fs-5 font-extrabold">Email: </span>
              <span className="text-success fs-6 ">{user?.email}</span>
            </p>
            <p>
              emailverified:{" "}
              {user?.emailVerified ? (
                <span className="text-warning">not-verified</span>
              ) : (
                <span className="text-success">verified</span>
              )}
            </p>
            <p>
              <span className="text-dark fs-5 font-extrabold">id: </span>
              <span className="text-success fs-6 ">{user?.uid}</span>
            </p>
            <p>
              <span className="text-dark fs-5 font-extrabold">photoUrl: </span>
              <span className="text-success fs-6 ">
                {user?.photURL || "empty"}
              </span>
            </p>
            <p>
              <span className="text-dark fs-5 font-extrabold">Number: </span>
              <span className="text-success fs-6 ">
                {user?.phoneNumber || "not set number"}
              </span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
