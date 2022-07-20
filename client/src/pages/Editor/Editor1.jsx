import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import EditorNavbar from "../../components/common/EditorNavbar";

const Editor1 = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(localStorage.getItem("data"));
  }, []);
  useEffect(() => {
    if(!value)return
    localStorage.setItem("data", value);
  }, [value]);
  return (
    <div className="pt-4 px-8 scrollbar-hide bg-black text-white">
      <EditorNavbar value={value} />
      <div
        className="mt-3 scrollbar-hide"
        style={{ minHeight: "calc(100vh - 48px)" }}
      >
        <p className="my-4 text-lg font-semibold">Markdown Editor</p>
        <MDEditor value={value} onChange={setValue} autoFocus />
        <p className="my-4 text-lg font-semibold">Preview</p>
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </div>
    </div>
  );
};

export default Editor1;
