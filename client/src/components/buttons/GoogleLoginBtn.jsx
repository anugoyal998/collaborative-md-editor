import React from "react";
import google from "../../img/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth as googleAuth } from "../../firebase";
import toast from "react-hot-toast";
import { login } from "../../http";

const GoogleLoginBtn = () => {
  const googleProvider = new GoogleAuthProvider();
  const handleClick = () => {
    signInWithPopup(googleAuth, googleProvider)
      .then(async (response) => {
        console.log(response);
        const user = {
          displayName: response.user?.displayName,
          email: response.user?.email,
          avatar: response.user?.photoURL,
          provider: "google",
        };
        try {
          const { data } = await login(user);
          console.log(data);
        } catch (error) {
          toast("Error Occured", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#000",
              color: "#fff",
            },
          });
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
        toast("Error Occured", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#000",
            color: "#fff",
          },
        });
      });
  };
  return (
    <button
      className="bg-black flex items-center space-x-3 px-10 py-[0.5rem] rounded-3xl text-lg font-semibold"
      onClick={handleClick}
    >
      <img src={google} alt="google" className="w-6" />{" "}
      <span>Login with Google</span>
    </button>
  );
};

export default GoogleLoginBtn;
