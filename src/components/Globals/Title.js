import React from "react";

export default function Title({ children }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 text-capitalize font-weight-bold">
          {children}
        </h1>
      </div>
    </div>
  );
}
