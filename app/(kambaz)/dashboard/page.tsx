"use client";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <Row
        id="wd-dashboard-courses"
        xs={1}
        sm={2}
        md={2}
        lg={3}
        xl={4}
        className="g-4"
      >
        {courses.map((course: any) => (
          <Col
            key={course._id}
            className="wd-dashboard-course"
            style={{ width: "300px" }}
          >
            <Card>
              <Link
                href={`/courses/${course._id}/home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src={course.image || "/images/reactjs.jpg"}
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    {course.name}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-desc text-muted"
                    style={{ maxHeight: "100px", overflow: "hidden" }}
                  >
                    {course.description}
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
