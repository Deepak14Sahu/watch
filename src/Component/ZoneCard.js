import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export default function ZoneCard({ zone, handleCardClick }) {
  const [bg, setBg] = useState("transparent");
  return (
    <Col>
      <Card
        border="light"
        bg={bg}
        text="light"
        className=" card mb-2"
        onMouseEnter={() => setBg("secondary")}
        onMouseLeave={() => setBg("transparent")}
        onClick={() => handleCardClick(zone)}
        style={{ height: "100px" }}
      >
        <Card.Body>
          <Card.Text
            style={{ fontSize: "1rem", color: "aquamarine", padding: "10%" }}
          >
            {zone}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
