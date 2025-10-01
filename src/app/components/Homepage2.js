import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Homepage2() {
  return (
    <>
      <div
        style={{
          // border: "1px solid white",
          height: "90%",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "90%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "70%",
              //   border: "1px solid white",
              padding: "0px 40px",
              marginTop: "40px",
            }}
          >
            <span
              style={{
                fontSize: "50px",
                color: "rgba(213, 162, 53, 1)",
                fontWeight: "bold",
                // marginBottom: "40px",
                marginTop: "20px",
                letterSpacing: ".5px",
              }}
            >
              Crafting Your Ideal Broker Setup From Idea To Launch
            </span>
            <br></br>
            <span
              style={{
                fontSize: "16px",
                letterSpacing: "2px",
                marginTop: "40px",
                lineHeight: "25px",
              }}
            >
              SetupFX offers a customizable platform for trading. From tech
              solutions to licensing, marketing, and consulting, we cover all
              broker needs.
            </span>
            <Button content="Lets Connect" top="20px" />
          </div>

          <div
            style={{
              width: "60%",
              // border: "1px solid white",
              position: "relative",
              height: "60%",
              marginTop: "5%",
            }}
          >
            <Image
              src="/assets/SetupFX-QR.png"
              alt="Banner"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
