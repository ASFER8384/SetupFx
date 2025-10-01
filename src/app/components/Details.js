import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Details() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "80vh",
        padding: "40px",
        background: "black",
        color: "white",
      }}
    >
      <div style={{ width: "50%", position: "relative", height: "400px" }}>
        <Image
          src="/assets/aboutUs.png" // put your image in public/assets/
          alt="Car"
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            margin: 0,
            color: "rgba(213, 162, 53, 1)",
          }}
        >
          Discover Who We Are
        </h2>
        <p style={{ fontSize: "18px" }}>
          SetupFX specializes in creating cutting-edge trading platforms and
          setting up broker firms from the ground up. Our team of industry
          experts is dedicated to transparency, integrity, and excellence. From
          humble beginnings to a leading industry player, we continue to drive
          innovation and empower our clients to succeed.
        </p>
        <Button content="Lets Connect" top="0px" />
      </div>
    </div>
  );
}
