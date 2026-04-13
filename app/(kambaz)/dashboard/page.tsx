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
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse, setCourses } from "../courses/coursesReducer";
import { enrollCourse, unenrollCourse, setEnrollments } from "../courses/enrollmentsReducer";
import { useState, useEffect } from "react";
import * as courseClient from "../courses/client";
import * as enrollmentClient from "../courses/enrollmentsClient";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const fetchCourses = async () => {
    try {
      const fetchedCourses = await courseClient.fetchAllCourses();
      dispatch(setCourses(fetchedCourses));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEnrollments = async () => {
    try {
      const fetchedEnrollments = await enrollmentClient.fetchAllEnrollments();
      dispatch(setEnrollments(fetchedEnrollments));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, []);

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    dispatch(addCourse(newCourse));
  };
  const deleteCourseItem = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };
  const updateCourseItem = async () => {
    await courseClient.updateCourse(course);
    dispatch(updateCourse(course));
  };
  const enroll = async (courseId: string) => {
    const newEnrollment = await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
    dispatch(enrollCourse(newEnrollment));
  };
  const unenroll = async (courseId: string) => {
    await enrollmentClient.unenrollUserFromCourse(currentUser._id, courseId);
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser && (
        <>
          {isFaculty && (
            <>
              <h5>New Course
                <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse}>
                  Add
                </button>
                <button className="btn btn-warning float-end me-2"
                  id="wd-update-course-click"
                  onClick={updateCourseItem}>
                  Update
                </button>
              </h5>
              <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
              <textarea value={course.description} className="form-control mb-4"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
              <hr />
            </>
          )}

          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
            {isStudent && (
              <Button
                onClick={() => setEnrolling(!enrolling)}
                className="float-end"
                variant="primary"
              >
                {enrolling ? "My Courses" : "All Courses"}
              </Button>
            )}
          </h2>
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
            {courses
              .filter((course: any) =>
                !isStudent ||
                enrolling ||
                (currentUser && enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                ))
              )
              .map((course: any) => {
                const isEnrolled = currentUser && enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                );
                return (
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

                          <div className="d-flex justify-content-between align-items-center">
                            <Button variant="primary">Go</Button>
                            <div>
                              {isStudent && enrolling && (
                                <Button
                                  variant={isEnrolled ? "danger" : "success"}
                                  className="me-2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (isEnrolled) {
                                      unenroll(course._id);
                                    } else {
                                      enroll(course._id);
                                    }
                                  }}
                                >
                                  {isEnrolled ? "Unenroll" : "Enroll"}
                                </Button>
                              )}
                              {isFaculty && (
                                <>
                                  <Button variant="danger" id="wd-delete-course-click"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      deleteCourseItem(course._id);
                                    }}>
                                    Delete
                                  </Button>
                                  <Button variant="warning" className="ms-2" id="wd-edit-course-click"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCourse(course);
                                    }}>
                                    Edit
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </CardBody>
                      </Link>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </>
      )}
    </div>
  );
}
