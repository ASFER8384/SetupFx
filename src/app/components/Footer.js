import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "45vh",
          padding: "50px",
          background: "black",
          display: "flex",
          gap: "50px",
        }}
      >
        <div style={{ border: "0px solid white", width: "40%" }}>
          <div
            style={{
              width: "180px",
              height: "80px",
              // marginBottom: "15px",
            }}
          >
            <img
              src="/assets/setupfxlogo.png" 
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <br></br>
          <span
            style={{
              color: "white",
              fontSize: "16px",
              //   border: "1px solid white",
              letterSpacing: "1px",
            }}
          >
            SetupFX boosts your broker with custom trading platforms, expert
            design, and compelling content.
          </span>
        </div>
        <div
          style={{
            //   border: "1px solid white",
            width: "70%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              // border: "1px solid white",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              height: "90%",
            }}
          >
            <div
              style={{
                width: "fit-content",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Quick Links
              </span>
              <div
                style={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Home
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  About us
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Brokerage
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Licensing
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Marketing
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Product Links
              </span>
              <div
                style={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Forex Brokerage Setup
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Licensing & Compliance
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  CRM & Tech Solutions
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Marketing for Forex Brokers
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  Support
                </span>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Office Location
              </span>
              <div
                style={{
                  height: "40%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  44 Convention Tower, World Trade Center, Dubai
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    letterSpacing: ".5px",
                  }}
                >
                  651 N Broad St #206 Middletown, DE 19709, USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          background: "black",
          padding: "20px",
          justifyContent: "space-between",
          // border:"1px solid white"
        }}
      >
        <span
          style={{ color: "white", fontSize: "12px", letterSpacing: "2px" }}
        >
          Copy rights reserved by Setup FX
        </span>
        <span
          style={{ color: "white", fontSize: "12px", letterSpacing: "2px" }}
        >
          Terms and condition - Privacy & Policy
        </span>
      </div>
    </>
  );
}
