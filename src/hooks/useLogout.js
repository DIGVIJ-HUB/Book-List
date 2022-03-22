import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuth";

export const useLog = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        alert("Logged Out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
