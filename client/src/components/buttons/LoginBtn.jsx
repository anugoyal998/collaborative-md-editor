import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/auth")}
      className="z-10 bg-[#E35F21] px-8 py-[0.35rem] rounded-3xl text-lg font-semibold hover:bg-[#e35e21d3] animation"
    >
      Login
    </button>
  );
};

export default LoginBtn;
