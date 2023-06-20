import React from "react";
import "./forecast.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Week_Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = Week_Days.slice(dayInAWeek, Week_Days.length).concat(
    Week_Days.slice(0, dayInAWeek)
  );
  console.log(data);
  return (
    <>
      <label htmlFor="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                </div>
                <label className="day">{forecastDays[idx]}</label>
                <label className="description">
                  {item.weather[0].description}
                </label>
                <label className="min-max">
                  {Math.round(item.main.temp_min)}°C
                </label>
                <label className="min-max">
                  {Math.round(item.main.temp_max)}°C
                </label>
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
