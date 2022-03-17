import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginHome from "./pages/LoginHome";
import NotFound from "./pages/NotFound";
import UserContext from "./context/AuthContext";
import { useContext } from "react";
import FullProducts from "./pages/FullProducts";

function App() {

  const {credentials} = useContext(UserContext)

  return (
        <Routes>
          <Route index exact element={!credentials?.status ? <LoginHome /> : <Navigate to="/home" />} />
          <Route path="/home" element={credentials?.status ? <Home /> : <Navigate to="/" />} />
          <Route path="/home/:product" element={credentials?.status ? <FullProducts /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
