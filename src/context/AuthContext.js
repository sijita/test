import { createContext } from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login";

const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState(null);
  const [spinner, setSpinner] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("logged");
    if (loggedUserJSON) {
      const credentials = JSON.parse(loggedUserJSON);
      setCredentials(credentials);
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();

    try {
      const credentials = await loginService.login({
        user,
        password,
      });

      window.localStorage.setItem("logged", JSON.stringify(credentials));

      if (!credentials.status) {
        setError("Usuario y/o contraseña incorrectos!");

        setTimeout(() => {
          setError(null);
        }, 4000);
      } else {
        setError(null);
        setSpinner(true);

        setTimeout(() => {
          navigate("/home", {
            replace: true,
          });
          setCredentials(credentials);
          setSpinner(false);
        }, 4000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const data = {
    login,
    user,
    setUser,
    password,
    setPassword,
    spinner,
    setSpinner,
    error,
    credentials,
    setCredentials,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { AuthProvider };
export default UserContext;
