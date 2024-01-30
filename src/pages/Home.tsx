import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20 text-[100px] font-[800]">
      <p className="cursor-pointer" onClick={() => navigate("/")}>
        JetStreams
      </p>
    </div>
  );
}

export default Home;
