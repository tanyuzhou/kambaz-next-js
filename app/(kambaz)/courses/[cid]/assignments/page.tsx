import Link from "next/link";
import {
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch, FaEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex mb-3">
        <InputGroup className="w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <FormControl
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        <div className="ms-auto">
          <Button
            variant="secondary"
            className="me-2"
            id="wd-add-assignment-group"
          >
            <BsPlus className="fs-5" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <BsPlus className="fs-5" /> Assignment
          </Button>
        </div>
      </div>
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="float-end">
              <span className="badge bg-secondary text-dark border border-dark rounded-pill">
                40% of Total
              </span>
              <BsPlus className="fs-3 ms-2" />
              <IoEllipsisVertical className="fs-4" />
            </span>
          </div>
          <ListGroup className="rounded-0">
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-3 text-success" />
              <div>
                <Link
                  href="/courses/1234/assignments/123"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A1 - ENV + HTML
                </Link>
                <br />
                <span className="text-muted small">
                  Multiple Modules | <b>Not available until</b> May 6 at 12:00am
                  | <b>Due</b> May 13 at 11:59pm | 100 pts
                </span>
              </div>
              <div className="ms-auto">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-3 text-success" />
              <div>
                <Link
                  href="/courses/1234/assignments/124"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A2 - CSS + BOOTSTRAP
                </Link>
                <br />
                <span className="text-muted small">
                  Multiple Modules | <b>Not available until</b> May 13 at
                  12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                </span>
              </div>
              <div className="ms-auto">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaEdit className="me-3 text-success" />
              <div>
                <Link
                  href="/courses/1234/assignments/125"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A3 - JAVASCRIPT + REACT
                </Link>
                <br />
                <span className="text-muted small">
                  Multiple Modules | <b>Not available until</b> May 20 at
                  12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                </span>
              </div>
              <div className="ms-auto">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
