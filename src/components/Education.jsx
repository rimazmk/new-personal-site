import React from "react";
import "../css/Education.scss";
import data from "../data.json";
import logo from "../images/U-M-logo.jpg";

const Education = () => {
  let l = data.education[0].courses.length;
  let h3 = data.education[0].courses;

  const displayCourses = (courses) => {
    return courses.map((course) => {
      return (
        <p className="course-name" key={course}>
          {course}
        </p>
      );
    });
  };

  return (
    <>
      <h1 id="education">Education 🎓</h1>
      <div className="card-horizontal">
        <div className="school-container">
          <div className="card-horizontal-text">
            <h2>University of Michigan</h2>
            <p>B.S.E. Computer Science</p>
            <p>GPA: 3.61/4.0</p>
            <p>Sep. 2018 - Dec. 2021</p>
          </div>
          <img src={logo} className="card-horizontal-img" alt="umich-logo" />
        </div>
        <h2 className="courses-title">Courses</h2>
        <div className="courses-outer-container">{displayCourses(h3)}</div>
      </div>
    </>
  );
};

export default Education;
