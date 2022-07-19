import MDEditor from "@uiw/react-md-editor";
import React, { useState } from "react";
import EditorNavbar from "../../components/common/EditorNavbar";
import { useAuth } from "../../hooks/useAuth";
import { myAuth } from "../../states";
import Editor from "./Editor";

const Main = () => {
  const loading = useAuth();
  const auth = myAuth((state) => state.auth);
  const [value, setValue] = useState('**Hello World!!**')

  if (auth && auth?.isAuth) return <Editor />;
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

export default Main;
