import React from "react";
import { useKey } from "../useKey";

export default function Button({ handleConvert }) {
  useKey("Enter", handleConvert);

  return (
    <div className="btn">
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}
