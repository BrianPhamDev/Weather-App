import React from "react";
import { Accordion, AccordionItem } from "react-accessible-accordion";

const Forecast = ({ data }) => {
  console.log(data);
  return (
    <>
      <label htmlFor="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        <AccordionItem></AccordionItem>
      </Accordion>
    </>
  );
};

export default Forecast;
