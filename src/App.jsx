import React, { useEffect } from "react";
import Routing from "./component/utils/routing";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./component/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/reducers/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        
      } else {
        // User is signed out
        dispatch(removeUser())
        
      }
    });
  }, []);

  return (
    <div>
      <Routing/>
    </div>
  );
}

export default App;
