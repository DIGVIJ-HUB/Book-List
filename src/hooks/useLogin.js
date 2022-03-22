import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuth";

export const useLogin = () => {
  const [err, setErr] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setErr(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        dispatch({ type: "LOGIN", payload: res });
        alert("Logged In Sucessful");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  return { err, login };
};
