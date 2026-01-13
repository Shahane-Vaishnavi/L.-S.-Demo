import React from "react";

export default function Button({ label, onClick, type }) {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        ...styles.button,
        background: type === "operator" ? "#ff9500" : "#333",
        color: "#fff",
      }}
    >
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: "20px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    margin: "5px",
    cursor: "pointer",
  },
};
