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

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl id="wd-name" defaultValue="A1" className="mb-3" />

      <Card className="p-3 mb-3">
        <p>
          The assignment is <span className="text-danger">available online</span>
        </p>
        <p>
          Submit a link to the landing page of your Web application running on
          Netlify.
        </p>
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
          <FormControl id="wd-points" type="number" defaultValue={100} />
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
              defaultValue="2024-05-13T23:59"
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
                  defaultValue="2024-05-06T12:00"
                />
              </Col>
              <Col>
                <FormLabel htmlFor="wd-available-until" className="fw-bold">
                  Until
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue="2024-05-20T12:00"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <hr />
      <div className="text-end">
        <Link
          href="/courses/1234/assignments"
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
