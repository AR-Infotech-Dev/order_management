import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./auth/AuthProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes />
        <ToastContainer position="top-right" autoClose={2500} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
