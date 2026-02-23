"use client";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  return (
    <>
      <Nav variant="pills" className="mb-3">
        <NavItem>
          <NavLink as={Link} href="/labs" id="wd-home-link" className={`nav-link ${pathname.endsWith("labs") ? "active" : ""}`}>
            Labs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab1" id="wd-lab1-link" className={`nav-link ${pathname.endsWith("lab1") ? "active" : ""}`}>
            Lab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab2" id="wd-lab2-link" className={`nav-link ${pathname.endsWith("lab2") ? "active" : ""}`}>
            Lab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab2/tailwind" id="wd-lab2-tailwind-link" className={`nav-link ${pathname.endsWith("tailwind") ? "active" : ""}`}>
            Lab 2 Tailwind
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/labs/lab3" id="wd-lab3-link" className={`nav-link ${pathname.endsWith("lab3") ? "active" : ""}`}>
            Lab 3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/" id="wd-kambaz-link">
            Kambaz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/tanyuzhou/kambaz-next-js" id="wd-github">
            My GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}
