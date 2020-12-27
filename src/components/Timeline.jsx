import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../css/Timeline.scss";
import data from "../data.json";
import "react-vertical-timeline-component/style.min.css";

const IconImage = (props) => {
  return <img src={props.image} className="img-icon" alt="" />;
};

const boxStyles = {
  background: "rgb(0, 0, 0)",
  boxShadow: "none",
  color: "white",
  borderRadius: "20px",
};

const Timeline = () => {
  return (
    <>
      <h1 id="experience">Experience 💼</h1>
      <VerticalTimeline>
        {data.experience.map((exp) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={boxStyles}
              contentArrowStyle={{ borderRight: "5px solid  rgb(0, 0, 0)" }}
              date={exp.date}
              dateClassName="date"
              icon={<IconImage image={exp.image} />}
            >
              <h3 className="vertical-timeline-element-title">{exp.company}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.title}
              </h4>
              <p className="timeline-desc">{exp.desc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
