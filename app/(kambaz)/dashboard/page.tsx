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

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      name: "CS1234 React JS",
      desc: "Full Stack software developer",
    },
    {
      id: "1001",
      name: "CS1001 Intro to Programming",
      desc: "Learn the basics of programming",
    },
    {
      id: "1002",
      name: "CS1002 Data Structures",
      desc: "Learn about data structures",
    },
    { id: "1003", name: "CS1003 Algorithms", desc: "Learn about algorithms" },
    { id: "1004", name: "CS1004 Databases", desc: "Learn about databases" },
    {
      id: "1005",
      name: "CS1005 Web Development",
      desc: "Learn about web development",
    },
    {
      id: "1006",
      name: "CS1006 Operating Systems",
      desc: "Learn about operating systems",
    },
  ];

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
        {courses.map((course) => (
          <Col
            key={course.id}
            className="wd-dashboard-course"
            style={{ width: "300px" }}
          >
            <Card>
              <Link
                href={`/courses/${course.id}/home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    {course.name}
                  </CardTitle>
                  <CardText className="wd-dashboard-course-desc text-muted">
                    {course.desc}
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
