"use client";
import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { use, useState } from "react";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = use(params);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((c: any) => c._id === cid);
  const courseName = course ? course.name : `Course ${cid}`;
  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          id="wd-course-navigation-toggle"
          onClick={() => setShowNavigation(!showNavigation)}
        />
        {courseName}
      </h2>
      <hr />
      <Row>
        {showNavigation && (
          <Col xs={12} md={3} lg={2} className="d-none d-md-block">
            <CourseNavigation />
          </Col>
        )}
        <Col xs={12} md={showNavigation ? 9 : 12} lg={showNavigation ? 10 : 12}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

