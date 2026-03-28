"use client";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function EnvironmentVariables() {
  return (
    <div>
      <h3>Environment Variables</h3>
      <p>{HTTP_SERVER}</p>
    </div>
  );
}
