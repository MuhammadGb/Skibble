"use client";

import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

const EmptyState = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-[40vh]"
      role="region"
      aria-labelledby="emptyStateHeading"
    >
      <div
        className="flex flex-col items-center justify-center gap-4 mt-12"
        tabIndex={0}
        aria-live="polite"
      >
        <FcEmptyTrash size={50} aria-hidden="true" />
        <h3
          id="emptyStateHeading"
          className="text-2xl font-semibold text-center"
          tabIndex={0}
        >
          No Products Found...
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
