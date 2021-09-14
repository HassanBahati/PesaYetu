import { useTour } from "@reactour/tour";
import React from "react";

import Line from "./Line";

const Tour = () => {
  const { isOpen, currentStep, steps } = useTour();
  if (!isOpen) {
    return null;
  }
  return (
    <Line
      firstSelector={`#carousel-title-${currentStep}`}
      secondSelector={steps[currentStep].selector}
    />
  );
};

export default Tour;
