"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-home-link"
        className={`list-group-item border-0 ${pathname.includes("home") ? "active" : "text-danger"}`}
      >
        Home
      </Link>
      <br />
      <Link
        href={`/courses/${cid}/modules`}
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${pathname.includes("modules") ? "active" : "text-danger"}`}
      >
        Modules
      </Link>
      <br />
      <a
        href="https://piazza.com/class/mju4yv9nultsp"
        id="wd-course-piazza-link"
        target="_blank"
        className="list-group-item text-danger border-0"
      >
        Piazza
      </a>
      <br />
      <Link
        href={`/courses/${cid}/zoom`}
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${pathname.includes("zoom") ? "active" : "text-danger"}`}
      >
        Zoom
      </Link>
      <br />
      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${pathname.includes("assignments") ? "active" : "text-danger"}`}
      >
        Assignments
      </Link>
      <br />
      <Link
        href={`/courses/${cid}/quizzes`}
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${pathname.includes("quizzes") ? "active" : "text-danger"}`}
      >
        Quizzes
      </Link>
      <br />
      <Link
        href={`/courses/${cid}/grades`}
        id="wd-course-grades-link"
        className={`list-group-item border-0 ${pathname.includes("grades") ? "active" : "text-danger"}`}
      >
        Grades
      </Link>
      <br />
      <Link
        href={`/courses/${cid}/people/table`}
        id="wd-course-people-link"
        className={`list-group-item border-0 ${pathname.includes("people") ? "active" : "text-danger"}`}
      >
        People
      </Link>
      <br />
    </div>
  );
}
