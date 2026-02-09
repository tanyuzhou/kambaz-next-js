import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {cid}
      </h2>
      <hr />
      <Row>
        <Col xs={12} md={3} lg={2} className="d-none d-md-block">
          <CourseNavigation />
        </Col>
        <Col xs={12} md={9} lg={10}>
          {children}
        </Col>
      </Row>
    </div>
  );
}
