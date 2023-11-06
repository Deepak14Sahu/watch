import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import ZoneCard from "./ZoneCard";
import { Button, Row } from "react-bootstrap";

function Clock() {
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");
  const [time, setTime] = useState(moment().tz(timeZone).format("LTS"));
  const [startIndex, setStartIndex] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const allTime = moment.tz.names();

  useEffect(() => {
    document.title = "Clock";
    const interval = setInterval(() => {
      setTime(moment().tz(timeZone).format("LTS"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const handleTimeZoneChange = (newTimeZone) => {
    setTimeZone(newTimeZone);
  };
  const handlePrev = () => {
    setStartIndex((prevstartIndex) => prevstartIndex - 20);
    setPageNumber((prevpageNumber) => prevpageNumber - 1);
  };
  const handleNext = () => {
    setStartIndex((prevstartIndex) => prevstartIndex + 20);
    setPageNumber((prevpageNumber) => prevpageNumber + 1);
  };

  return (
    <>
      <div className="clock">
        <div className="timeZone">{timeZone}</div>
        <div className="time">{time}</div>
      </div>
      <div className="zone-clock">
        <h1 style={{ marginTop: "10px" }}>Time Zones</h1>
        <hr />
        <div className="container">
          <Row xs={1} md={4} style={{ margin: "0px 10px 0px 10px" }}>
            {allTime.slice(startIndex, startIndex + 20).map((zone, index) => (
              <ZoneCard
                key={index}
                zone={zone}
                handleCardClick={handleTimeZoneChange}
              />
            ))}
          </Row>

          {/* Pagination */}

          <div className="pagination">
            {startIndex >= 20 && (
              <Button variant="outline-info " onClick={handlePrev}>
                <i className="fa fa-chevron-left " aria-hidden="true"></i>
              </Button>
            )}

            <div className="page-number">{pageNumber}</div>

            {startIndex + 20 < allTime.length && (
              <Button variant="outline-info" onClick={handleNext}>
                <i className="fa fa-chevron-right " aria-hidden="true"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
