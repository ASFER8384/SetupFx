import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 40px",
        // border: "1px solid white",
      }}
    >
      <div style={{ width: "25%", border: "0px solid white" }}>
        <div style={{ width: "120px", height: "80px", position: "relative" }}>
          <Image
            src="/assets/setupfxlogo.png" 
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div style={{ color: "white", border: "0px solid white", width: "30%" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            textDecoration: "none",
            width: "100%",
            // border: "1px solid white",
          }}
        >
          <span>Home</span>
          <span>About</span>
          <span>Brokerage</span>
          <span>Licensing</span>
          <span>Marketing</span>
        </div>
      </div>

      <div
        style={{
          width: "30%",
          // border: "1px solid white",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button content="Contact Now" top="0px" />
      </div>
    </div>
  );
}
