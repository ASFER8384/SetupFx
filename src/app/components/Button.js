import React from "react";

export default function Button({ content, top }) {
  return (
    <div
      style={{
        width: "180px",
        height: "50px",
        marginTop: top,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(213, 162, 53, 0.3)",
      }}
    >
      <span style={{ color: "white", fontSize: "18px", letterSpacing: "1px" }}>
        {content}
      </span>
    </div>
  );
}
