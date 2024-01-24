"use client";
import React from "react";
import { IonSpinner } from "@ionic/react";
const Preloader = () => {
  return (
    <div className="preloader">
      <IonSpinner name="bubbles" />
    </div>
  );
};

export default Preloader;
