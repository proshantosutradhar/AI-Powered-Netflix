import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../store/reducers/userSlice";
import { toggleGPTPage } from "../../store/reducers/gptSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gptState = useSelector((store) => store.gpt?.gptStatus);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTbutton = () => {
    dispatch(toggleGPTPage());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row absolute justify-between items-center bg-black md:bg-black/0 md:bg-gradient-to-b md:from-black px-37 py-6 z-50">
      <img className="min-w-28 md:max-w-40 py-3" src={logo} alt="" />
      <div>
        {user && (
        <div className="flex md:w-full w-screen justify-center">
          {gptState ? 
            <button
              onClick={handleGPTbutton}
              className="cursor-pointer py-[0px] px-2 md:py-1 md:px-3 mr-5 bg-blue-600 rounded text-white"
            >
              HomePage
            </button>
           : 
            <button
              onClick={handleGPTbutton}
              className="cursor-pointer py-1 px-3 mr-5 bg-blue-600 rounded text-white"
            >
              NetFlixGPT
            </button>
          }
          
          <button
            onClick={handleSignOut}
            className="cursor-pointer py-1 px-3 bg-red-600 rounded text-white"
          >
            Sign Out
          </button>
          
        </div>
      )}
      </div>
    </div>
  );
}

export default Header;
