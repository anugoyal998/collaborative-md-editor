import React, { useState } from "react";
import logo from "../../img/logo.png";
import { myAuth } from "../../states";
import LoginBtn from "../buttons/LoginBtn";
import { FaUserAlt } from "react-icons/fa";
import TimeAgo from "react-timeago";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { IoMdCloudDone } from "react-icons/io";
import { renameFile } from "../../http";

const EditorNavbar = ({ lastEdited, value, fileName, setFileName, fileId }) => {
  const auth = myAuth((state) => state.auth);
  const username = auth?.user?.email?.split("@")?.[0];
  const [editFlag, setEditFlag] = useState(false);
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "untitled.md";
    element.click();
  };
  return (
    <div className="h-12">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        {auth && auth?.isAuth && (
          <div
            className={`flex items-center px-2 space-x-2 border ${
              editFlag ? "border-white" : "border-[#444]"
            } `}
          >
            <input
              type="text"
              disabled={!editFlag}
              defaultValue={fileName || "Untitled"}
              className="bg-black outline-none py-1 border-r border-[#444]"
              onChange={(e) => setFileName(e.target.value)}
              autoFocus
            />
            {!editFlag ? (
              <TbEdit
                className="text-xl cursor-pointer"
                onClick={() => {
                  setEditFlag(true);
                }}
              />
            ) : (
              <IoMdCloudDone
                className="text-xl cursor-pointer"
                onClick={async () => {
                  try {
                    await renameFile({ fileId, name: fileName });
                    setEditFlag(false);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            )}
          </div>
        )}
        <div className="flex items-center space-x-5">
          {auth && auth?.isAuth && lastEdited && (
            <div className="flex">
              <p className="underline">Edited &nbsp;</p>
              <TimeAgo date={lastEdited} className="underline" />
            </div>
          )}

          <button onClick={downloadFile} className="tooltip">
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
