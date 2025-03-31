import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Home.css";
import CoverImg from "./../../assets/images/wedcover.png";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div className="home-image-container">
      <div
        className="home-image"
        style={{
          width: isMobile ? "90%" : isTablet ? "75%" : "50%",
          padding: isMobile ? "15px 0" : "25px 0",
          textAlign: "center",
        }}
      >
        <img
          src={CoverImg}
          alt="Cover"
          style={{ width: "100%", height: "auto", borderRadius: isMobile ? "10px" : "20px" }}
        />
      </div>
    </div>
  );
}

export default Home;