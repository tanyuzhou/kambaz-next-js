"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState, Suspense } from "react";
import * as db from "../../database";
import { setCurrentUser } from "../accountReducer";
import { redirect, useSearchParams } from "next/navigation";

function SigninForm() {
  const searchParams = useSearchParams();
  const [credentials, setCredentials] = useState<any>({ username: "ada", password: "123" });
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "not_logged_in" ? "Please log in to continue." : null
  );
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) {
      setError("Incorrect username or password. Please try again.");
      return;
    }
    dispatch(setCurrentUser(user));
    redirect("/dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Signin</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signin}
      >
        Sign in
      </Button>
      <Link id="wd-signup-link" href="/account/signup">
        Signup
      </Link>
    </div>
  );
}

export default function Signin() {
  return (
    <Suspense fallback={<div>Loading Signin...</div>}>
      <SigninForm />
    </Suspense>
  );
}
