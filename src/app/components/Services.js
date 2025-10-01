import Image from "next/image";
import React from "react";

export default function Services() {
  const packages = [
    {
      id: 1,
      title: "Cost-Effectiveness",
      description:
        "Affordable solutions to help you reduce costs and improve.",
      image: "/assets/costeffective.png",
    },
    {
      id: 2,
      title: "One-Stop Solution",
      description: "Comprehensive services to set up your broker seamlessly.",
      image: "/assets/onsStop.png",
    },
    {
      id: 3,
      title: "Industry Expertise",
      description: "Deep knowledge in broker operations and regulations.",
      image: "/assets/thumbsup.png",
    },
    {
      id: 4,
      title: "Scalability",
      description: "Flexible platforms designed to grow with your business.",
      image: "/assets/scaleup.png",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid white",
      }}
    >
      <div
        style={{
          // border: "1px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          padding: "50px 0px",
          marginBottom: "50px",
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
          Customize Your Broker Platform For<br></br> Maximum Impact!
        </span>
      </div>
      <div style={{ width: "95%", height: "300px", border: "0px solid white" }}>
        {/* <div
          style={{ border: "1px solid white", width: "250px", height: "250px" }}
        >
          One
        </div> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {(packages || []).map((content, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                height: "300px",
                border: "1px solid white",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  // border: "1px solid? white",
                  width: "85%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "20px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "18px",
                  }}
                >
                  {content?.title}
                </span>
                <span
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  {content?.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
