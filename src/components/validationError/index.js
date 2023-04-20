import "./validationerror.css";
import React from "react";

export default function ValidationError({ error }) {
  if (error) {
    return <div className="validation-error">{error}</div>;
  } else {
    return null;
  }
}
