import { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account">
      <Row>
        <Col xs={12} md={3} lg={2}>
          <AccountNavigation />
        </Col>
        <Col xs={12} md={9} lg={10}>
          {children}
        </Col>
      </Row>
    </div>
  );
}
