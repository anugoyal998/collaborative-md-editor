import React from "react";
import { GoMarkdown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { myAuth } from "../../states";

const MdEditorBtn = () => {
  const navigate = useNavigate();
  const user = myAuth(state=> state.auth.user)
  const handleClick = ()=> {
    if(user && user?.email){
      navigate(`/editor?fileId=${Date.now().toString()}`)
    }else{
      navigate('/editor')
    }
  }
  return (
    <button
      className="flex items-center space-x-2 text-lg bg-[#E35F21] px-8 py-[0.35rem] rounded-3xl hover:bg-[#e35e21d3] animation"
      onClick={handleClick}
    >
      <GoMarkdown /> <span> Editor </span>
    </button>
  );
};

export default MdEditorBtn;
