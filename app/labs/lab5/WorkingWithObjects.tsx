"use client";
import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
  });
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <h4 className="mt-3">Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <h4 className="mt-3">Modifying Properties</h4>
      <label className="form-label" htmlFor="wd-assignment-title">
        Assignment Title
      </label>
      <input
        id="wd-assignment-title"
        className="form-control mb-2"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Title
      </a>
      <label className="form-label mt-2" htmlFor="wd-assignment-score">
        Assignment Score
      </label>
      <input
        id="wd-assignment-score"
        className="form-control mb-2"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment/score/${assignment.score}`}
      >
        Update Score
      </a>
      <br />
      <label className="form-label mt-2" htmlFor="wd-assignment-completed">
        Completed
      </label>
      <input
        id="wd-assignment-completed"
        className="form-check-input ms-2"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary ms-2"
        href={`${HTTP_SERVER}/lab5/assignment/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <hr />
      <h3>On Your Own: Working With Module Object</h3>
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <h4 className="mt-3">Modifying Module</h4>
      <label className="form-label" htmlFor="wd-module-name">
        Module Name
      </label>
      <input
        id="wd-module-name"
        className="form-control mb-2"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-name"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>
      <label className="form-label mt-2" htmlFor="wd-module-description">
        Module Description
      </label>
      <input
        id="wd-module-description"
        className="form-control mb-2"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        id="wd-update-module-description"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Module Description
      </a>
    </div>
  );
}
