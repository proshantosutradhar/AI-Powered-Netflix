import React from "react";
import logo from "../../assets/images/logo.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between items-center bg-gradient-to-b from-black px-37 py-6 z-50 w-full">
      <img className="w-38 z-1" src={logo} alt="" />
      <div>
        {user && <button
          onClick={handleSignOut}
          className="cursor-pointer py-1 px-3 bg-red-600 rounded text-white"
        >
          Sign Out
        </button>}
      </div>
    </div>
  );
}

export default Header;
