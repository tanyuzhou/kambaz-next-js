"use client";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function TOC() {
  return (
    <>
      <Nav variant="pills" className="mb-3">
        <NavItem>
          <NavLink as={Link} href="/labs" id="wd-home-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab1" id="wd-lab1-link">
            Lab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab2" id="wd-lab2-link">
            Lab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab2/tailwind" id="wd-lab2-tailwind-link">
            Lab 2 Tailwind
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/" id="wd-kambaz-link">
            Kambaz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/tanyuzhou/kambaz-next-js" id="wd-github">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}
