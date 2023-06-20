import React from "react";
import { Accordion } from "react-accessible-accordion";

const Forecast = ({ data }) => {
  return (
    <>
      <label htmlFor="title">Daily Forecast</label>
      <Accordion allowZeroExpanded></Accordion>
    </>
  );
};

export default Forecast;
