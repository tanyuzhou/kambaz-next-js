"use client";
import Link from "next/link";
import {
  Row,
  Col,
  FormControl,
  FormLabel,
  FormSelect,
  FormCheck,
  Button,
  Card,
} from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const existingAssignment =
    aid !== "new" ? assignments.find((a: any) => a._id === aid) : null;

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      title: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      dueDate: "2024-05-13T23:59",
      availableDate: "2024-05-06T00:00",
      course: cid,
    }
  );

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        className="mb-3"
      />

      <Card className="p-3 mb-3">
        <p>
          The assignment is <span className="text-danger">available online</span>
        </p>
        <p>
          The assignment is <span className="text-danger">available online</span>
        </p>
        <FormControl
          as="textarea"
          rows={3}
          id="wd-description"
          defaultValue={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          className="mb-3"
        />
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>
            Link to the <a href="/">Kanbas</a> application
          </li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>
          The <a href="/">Kanbas</a> application should include a link to navigate back to the
          landing page.
        </p>
      </Card>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-points" className="col-form-label">
            Points
          </FormLabel>
        </Col>
        <Col sm={9}>
          <FormControl
            id="wd-points"
            type="number"
            defaultValue={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-group" className="col-form-label">
            Assignment Group
          </FormLabel>
        </Col>
        <Col sm={9}>
          <FormSelect id="wd-group">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams">EXAMS</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-display-grade-as" className="col-form-label">
            Display Grade as
          </FormLabel>
        </Col>
        <Col sm={9}>
          <FormSelect id="wd-display-grade-as">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-submission-type" className="col-form-label">
            Submission Type
          </FormLabel>
        </Col>
        <Col sm={9}>
          <Card className="p-3">
            <FormSelect id="wd-submission-type" className="mb-3">
              <option value="online">Online</option>
              <option value="paper">On Paper</option>
            </FormSelect>
            <FormLabel className="fw-bold">Online Entry Options</FormLabel>
            <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
            <FormCheck
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
              defaultChecked
            />
            <FormCheck
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
            />
            <FormCheck
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
            />
            <FormCheck
              type="checkbox"
              id="wd-file-uploads"
              label="File Uploads"
            />
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel className="col-form-label">Assign</FormLabel>
        </Col>
        <Col sm={9}>
          <Card className="p-3">
            <FormLabel htmlFor="wd-assign-to" className="fw-bold">
              Assign to
            </FormLabel>
            <FormControl
              id="wd-assign-to"
              defaultValue="Everyone"
              className="mb-3"
            />

            <FormLabel htmlFor="wd-due-date" className="fw-bold">
              Due
            </FormLabel>
            <FormControl
              type="datetime-local"
              id="wd-due-date"
              defaultValue={assignment.dueDate}
              onChange={(e) =>
                setAssignment({ ...assignment, dueDate: e.target.value })
              }
              className="mb-3"
            />

            <Row>
              <Col>
                <FormLabel htmlFor="wd-available-from" className="fw-bold">
                  Available from
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue={assignment.availableDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableDate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <FormLabel htmlFor="wd-available-until" className="fw-bold">
                  Until
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue={assignment.dueDate || "2024-05-20T23:59"}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <hr />
      <div className="text-end">
        <Link
          href={`/courses/${cid}/assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Button onClick={handleSave} className="btn-danger">
          Save
        </Button>
      </div>
    </div>
  );
}
