"use client";
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
import { useParams } from "next/navigation";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroupItem key={assignment._id} className="wd-assignment-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaEdit className="me-3 text-success" />
                  <div>
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-dark text-decoration-none fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.availableDate} |
                      <b> Due</b> {assignment.dueDate} | {assignment.points} pts
                    </span>
                  </div>
                  <div className="ms-auto">
                    <GreenCheckmark />
                    <IoEllipsisVertical className="fs-4" />
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
