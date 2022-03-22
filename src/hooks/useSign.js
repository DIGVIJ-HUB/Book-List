import { useState } from "react";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuth";

export const useSign = () => {
  const [err, setErr] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setErr(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        alert("Sign In Sucessful");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  return { err, signup };
};
