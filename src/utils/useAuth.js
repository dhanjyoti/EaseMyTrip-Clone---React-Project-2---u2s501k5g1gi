import { createContext, useContext, useState } from "react";
import useUser from "./useUser";

// Context Api for providing api to pages that are logged validation
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { user } = useUser();
  const [showLogin, setShowLogin] = useState(false);

  const validate = () => {
    setShowLogin(!user);
    return !!user
  };

    return <AuthContext.Provider value={{validate, showLogin, setShowLogin}}>{children}</AuthContext.Provider>;
};

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext);
};
