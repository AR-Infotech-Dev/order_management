import { useMemo, useState } from "react";
import { getCurrentSession, logoutFromLocalAuth } from "./authStorage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authSession, setAuthSession] = useState(() => getCurrentSession());

  const value = useMemo(() => ({
    authSession,

    login(session) {
      setAuthSession(session);
    },

    logout() {
      logoutFromLocalAuth();
      setAuthSession(null);
      setTimeout(()=>{
        navigate('/login');
      },2000);
    }
  }), [authSession, navigate]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
