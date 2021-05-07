import React from "react";
import SpinImg from "./Spinner.gif";

function Spinner() {
  return (
    <>
      <img
        src={SpinImg}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
}

export default Spinner;
