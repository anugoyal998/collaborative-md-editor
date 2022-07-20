import React from "react";
import logo from "../../img/logo.png";
import { myAuth } from "../../states";
import LoginBtn from "../buttons/LoginBtn";
import { FaUserAlt } from "react-icons/fa";
import TimeAgo from "react-timeago";
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const EditorNavbar = ({ lastEdited, value }) => {
  const auth = myAuth((state) => state.auth);
  const username = auth?.user?.email?.split("@")?.[0];
  const downloadFile = ()=> {
    const element = document.createElement("a");
    const file = new Blob([value],{
      type: "text/plain",
    })
    element.href = URL.createObjectURL(file)
    element.download = "untitled.md"
    element.click()
  }
  return (
    <div className="h-12">
      <div className="flex justify-between items-center">
       <Link to="/">
       <img className="w-28" src={logo} alt="logo" />
       </Link>
        <div className="flex items-center space-x-5">
          {auth && auth?.isAuth && lastEdited && (
            <div className="flex">
              <p className="underline">Edited &nbsp;</p>
              <TimeAgo date={lastEdited} className="underline" />
            </div>
          )}

          <button onClick={downloadFile} className="tooltip" >
            <HiOutlineDocumentDownload className="text-2xl" />
            <span className="tooltiptext">Download</span>
          </button>
        

          {auth && auth?.isAuth ? (
            <button className="px-6 truncate py-[0.5rem] BS rounded-3xl flex items-center space-x-2 w-40">
              <p className="truncate">{username}</p>
              <FaUserAlt />
            </button>
          ) : (
            <LoginBtn />
          )}
        </div>
      </div>
      <hr className="mt-3 border-[#444]" />
    </div>
  );
};

export default EditorNavbar;
