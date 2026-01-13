import React from "react";
import Button from "./Button";

export default function ButtonGrid({ onButtonClick }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div style={styles.grid}>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          label={btn}
          type={isNaN(btn) ? "operator" : "number"}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
};
