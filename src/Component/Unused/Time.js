import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { Card } from "react-bootstrap";

export const Time = ({ timeZone }) => {
  const [time, setTime] = useState(moment().tz(timeZone).format("LTS"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timeZone).format("LTS"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <Card.Text style={{ fontSize: "1.5rem", color: "aquamarine" }}>
      {time}
    </Card.Text>
  );
};
