import React from "react";

export default function WhatCompanyDO() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        paddingBottom: "40px",
        // border: "1px solid white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          padding: "50px 0px",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            color: "rgba(213, 162, 53, 1)",
            fontSize: "40px",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          Why choose us
        </span>
        <span
          style={{
            color: "white",
            fontSize: "18px",
            textAlign: "center",
            letterSpacing: "2px",
            // paddingBottom: "20px",
            width: "80%",
          }}
        >
          Discover how our solutions have driven success and transformation for
          our clients.
        </span>
      </div>

      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "100%",
            position: "relative",
            // border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="/assets/whatCompanyDo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "90%",
              height: "90%",
              objectFit: "contain",
              borderRadius: "10px",
              // border: "1px solid white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
