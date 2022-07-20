import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import mdEditor from "../img/md-editor.mp4";

const Landing = () => {
  return (
    <>
      <div className="polka h-[230px] w-[350px] absolute z-0 right-0"></div>
      <div className="polka h-[350px] w-[350px] absolute z-0 left-0 bottom-0"></div>
      <div className="bg-[#000] text-white pt-4 px-8">
        <Navbar />
        <Content />
      </div>
    </>
  );
};

const Content = () => {
  return (
    <div className="mt-[20vh] flex flex-col items-center">
      <p
        className="text-xl"
        style={{
          fontFamily: "Nunito",
        }}
      >
        The Online Collaborative
      </p>
      <p
        className="text-5xl italic "
        style={{
          fontFamily: "Nunito",
          color: "#E35F21",
          fontWeight: "bold",
        }}
      >
        Markdown Editor
      </p>
      <p className="text-center text-lg text-gray-300">
        <strong>Create, Edit</strong> markdown files with{" "}
        <strong>Real Time Collaboration</strong>.
      </p>
      <p className="text-center text-lg text-gray-300">
        Write <strong>README </strong> easily.
      </p>
      <Link to="/editor">
        <button className="text-xl font-semibold bg-[#E35F21] my-6 px-8 py-3 rounded-sm">
          Get Started
        </button>
      </Link>
      <div className="z-10 my-[8vh]">
        {/* <img src={demo} className="rounded-xl BS1" /> */}
        <video
          src={mdEditor}
          autoPlay={true}
          muted
          loop
          className="BS rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Landing;
