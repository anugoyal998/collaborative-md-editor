import React from "react";
import github from "../../img/github.png";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth as githubAuth } from '../../firebase'

const GithubLoginBtn = () => {
    const handleClick = ()=> {
        signInWithPopup(githubAuth,new GithubAuthProvider()).then((res)=> {
          console.log(res)
        }).catch((err)=> {
          console.log(err)
        })
    }
  return (
    <button className="bg-black flex items-center space-x-3 px-10 py-[0.5rem] rounded-3xl text-lg font-semibold" onClick={handleClick} >
      <img src={github} alt="github" className="w-6" />{" "}
      <span>Login with Github</span>
    </button>
  );
};

export default GithubLoginBtn;
