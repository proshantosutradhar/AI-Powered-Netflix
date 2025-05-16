import { useRef, useState } from "react";
import Header from "./partials/Header";
import background from "./../assets/images/background.jpg";
import { formValidate } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const navigate = useNavigate()
  const email = useRef(null);
  const name = useRef(null);

  const password = useRef(null);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleSubmit = () => {
    const nameValue = !signIn ? name.current.value : null;

    const message = formValidate(
      nameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
        });
    }
  };

  return (
    <div className="overflow-y-auto w-full min-h-screen relative">
      <div className="bg-black w-[100%] min-h-[121.5vh] z-1 absolute top-0 opacity-60"></div>
      <Header />
      <div>
        <img
          className="w-[100vw] min-h-screen absolute"
          src={background}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 z-50 absolute bg-[rgba(0,0,0,0.7)] p-12 text-white mt-30 mx-auto right-0 left-0"
      >
        <h3 className="text-3xl font-bold mb-8">
          {signIn ? "Sign In" : "Sign Up"}
        </h3>

        {!signIn && (
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-4 m-2 w-full border border-gray-300 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email"
          className="p-4 m-2 w-full border border-gray-300 rounded"
        />
        <input
          ref={password}
          type="text"
          name="password"
          placeholder="Password"
          className="p-4 m-2 w-full border border-gray-300 rounded"
        />
        <p className="text-red-600 ml-2">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="opacity-100 py-2 m-2 bg-red-600 w-full font-bold rounded cursor-pointer"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignIn}
          className="text-bold ml-2 mt-4 cursor-pointer w-fit"
        >
          {signIn ? "New here? Sign Up Today!" : "Already Registered? Sign In!"}
        </p>
      </form>
    </div>
  );
}

export default Signin;
