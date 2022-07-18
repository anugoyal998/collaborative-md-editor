import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/auth")}
      className="bg-[#E35F21] px-8 py-2 rounded-3xl text-lg font-semibold"
    >
      Login
    </button>
  );
};

export default LoginBtn;
