import React from "react";

export default function Display({ value }) {
  return (
    <div style={styles.display}>
      {value}
    </div>
  );
}

const styles = {
  display: {
    width: "100%",
    padding: "20px",
    fontSize: "2rem",
    background: "#222",
    color: "#fff",
    textAlign: "right",
    borderRadius: "10px",
    marginBottom: "15px",
  },
};
