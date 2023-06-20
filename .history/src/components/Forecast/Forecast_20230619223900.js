import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({ data }) => {
  console.log(data);
  return (
    <>
      <label htmlFor="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 6).map(({item, dt_dxt}) => {
          (<AccordionItemHeading></AccordionItemHeading>
          <AccordionItemPanel></AccordionItemPanel>)
        })}
        <AccordionItem></AccordionItem>
      </Accordion>
    </>
  );
};

export default Forecast;
