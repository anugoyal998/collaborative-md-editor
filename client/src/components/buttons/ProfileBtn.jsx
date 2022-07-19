import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ProfileBtn = ({ username }) => {
  return (
    <button className="flex space-x-2 items-center text-lg bg-[#E35F21] px-8 py-[0.35rem] rounded-3xl hover:bg-[#e35e21d3] animation">
      <span>{username}</span>
      <FaChevronDown />
    </button>
  );
};

export default ProfileBtn;
