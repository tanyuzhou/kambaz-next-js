"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../accountReducer";
import { Button, FormControl, FormSelect } from "react-bootstrap";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      router.push("/account/signin");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };

  const updateProfile = async () => {
    try {
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedUser));
      alert("Profile updated successfully!");
    } catch (err: any) {
      alert("Error updating profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl
            id="wd-username"
            defaultValue={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className="mb-2"
          />
          <FormControl
            id="wd-password"
            defaultValue={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            type="password"
            className="mb-2"
          />
          <FormControl
            id="wd-firstname"
            defaultValue={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            className="mb-2"
          />
          <FormControl
            id="wd-lastname"
            defaultValue={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            className="mb-2"
          />
          <FormControl
            id="wd-dob"
            type="date"
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            className="mb-2"
          />
          <FormControl
            id="wd-email"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            type="email"
            className="mb-2"
          />
          <FormSelect
            id="wd-role"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="mb-2"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
          <Button
            id="wd-update-btn"
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
          >
            Update
          </Button>
          <Button
            id="wd-signout-btn"
            onClick={signout}
            className="btn btn-danger w-100"
          >
            Signout
          </Button>
        </div>
      )}
    </div>
  );
}
