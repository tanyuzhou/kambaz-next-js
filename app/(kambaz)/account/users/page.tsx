"use client";
import { Table, Form, Button, Row, Col, Offcanvas } from "react-bootstrap";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import * as client from "../client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  const fetchUsers = async () => {
    try {
      if (role) {
        const users = await client.findUsersByRole(role);
        setUsers(users);
      } else {
        const users = await client.findAllUsers();
        setUsers(users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [role]);

  const handleCreateUser = async () => {
    const newUser = {
      username: `newuser${Date.now()}`,
      password: "123",
      firstName: "New",
      lastName: "User",
      loginId: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32"
    };
    const user = await client.signup(newUser);
    setUsers([...users, user]);
  };

  const handleUpdate = async () => {
    await client.updateUser(selectedUser);
    setUsers(users.map(u => u._id === selectedUser._id ? selectedUser : u));
    setEditing(false);
  };

  const handleDelete = async () => {
    await client.deleteUser(selectedUser._id);
    setUsers(users.filter(u => u._id !== selectedUser._id));
    setShow(false);
  };

  const openDetails = (user: any) => {
    setSelectedUser(user);
    setEditing(false);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div id="wd-users-screen">
      <Row className="mb-3 align-items-center">
        <Col md={3}>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">All Roles</option>
            <option value="STUDENT">Students</option>
            <option value="TA">Assistants</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Control
            placeholder="Search people"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="danger" className="float-end" onClick={handleCreateUser}>
            + People
          </Button>
        </Col>
      </Row>

      <Table striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              if (nameFilter) {
                const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
                return fullName.includes(nameFilter.toLowerCase());
              }
              return true;
            })
            .map((user: any) => (
              <tr key={user._id} onClick={() => openDetails(user)} style={{ cursor: 'pointer' }}>
                <td className="wd-full-name text-nowrap text-danger">
                  <FaUserCircle className="me-2 fs-4 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId || "001234561S"}</td>
                <td className="wd-section">{user.section || "S101"}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity || "2020-10-01"}</td>
                <td className="wd-total-activity">{user.totalActivity || "10:21:32"}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="justify-content-end p-2 pb-0">
          <IoMdClose className="fs-1" style={{ cursor: "pointer" }} onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body className="p-4 pt-0">
          <div className="text-center mb-4">
            <FaUserCircle className="text-secondary" style={{ fontSize: "100px" }} />
          </div>

          {!editing && selectedUser && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-danger m-0">{selectedUser.firstName} {selectedUser.lastName}</h2>
                <FaPencil className="text-danger fs-4 cursor-pointer" style={{cursor: "pointer"}} onClick={() => setEditing(true)} />
              </div>
            </>
          )}

          {editing && selectedUser && (
            <div className="d-flex align-items-center mb-3 gap-2">
              <Form.Control
                value={selectedUser.firstName}
                onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
                className="w-50 border-primary"
                style={{ borderWidth: "2px", backgroundColor: "white" }}
              />
              <Form.Control
                value={selectedUser.lastName}
                onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
                className="w-50 border-primary"
                style={{ borderWidth: "2px", backgroundColor: "white" }}
              />
              <FaCheck className="text-danger fs-3 ms-2" style={{ cursor: "pointer" }} onClick={handleUpdate} />
            </div>
          )}

          {selectedUser && (
            <div className="fs-5">
              <div className="mb-2"><strong>Roles:</strong> {selectedUser.role}</div>
              <div className="mb-2"><strong>Login ID:</strong> {selectedUser.loginId || "001234561S"}</div>
              <div className="mb-2"><strong>Section:</strong> {selectedUser.section || "S101"}</div>
              <div className="mb-4"><strong>Total Activity:</strong> {selectedUser.totalActivity || "10:21:32"}</div>

              <div className="d-flex justify-content-end gap-2 mt-4 pt-4 border-top">
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
