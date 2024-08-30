import React from "react";
import { Hero, WhatsNew } from "../containers";
import { MainLayout } from "../components/layouts";
// import "../styles/base.css";

export default function Homepage() {
  return (
    <MainLayout title="OverVue">
      <Hero />
      <WhatsNew />
    </MainLayout>
  );
}
