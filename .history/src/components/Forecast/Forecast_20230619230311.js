import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({ data }) => {
  console.log(data);
  return (
    <>
      <label htmlFor="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 6).map(({ item, dt_dxt }) => (
          <AccordionItem key={dt_dxt}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/01d.png`}
                    alt="weather"
                    className="icon-small"
                  />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>Panel</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
