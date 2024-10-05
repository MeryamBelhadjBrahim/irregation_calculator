// src/Components/MyCard.js

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export function MyCard({ text, title, image, handleClick }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "1rem",
      }}
    >
      <img
        alt="Card cap"
        src={image}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <CardBody>
        <CardTitle tag="h5" style={{ textAlign: "center" }}>
          {" "}
          {title}
        </CardTitle>
        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
          {title}
        </CardSubtitle> */}
        <CardText style={{ textAlign: "center" }}>
          ccccccccccccccccccccccccc
        </CardText>
      </CardBody>
      <button
        className="btn btn-primary"
        onClick={handleClick}
        style={{ alignItems: "center" }}
      >
        essayez-le
      </button>
    </Card>
  );
}
