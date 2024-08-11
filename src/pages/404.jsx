import React from "react";
import { MainLayout } from "../layouts";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <MainLayout>
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, we could not find what you were looking for.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </MainLayout>
  );
}
