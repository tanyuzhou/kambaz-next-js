"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../accountReducer";
import { FormControl, Button, FormLabel } from "react-bootstrap";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "", verifyPassword: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const signup = async () => {
    if (credentials.password !== credentials.verifyPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const user = await client.signup(credentials);
      dispatch(setCurrentUser(user));
      router.push("/account/profile");
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <FormControl
        id="wd-verify-password"
        placeholder="verify password"
        type="password"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, verifyPassword: e.target.value })}
      />
      <Button
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
      >
        Signup
      </Button>
      <Link id="wd-signin-link" href="/account/signin">
        Signin
      </Link>
    </div>
  );
}
