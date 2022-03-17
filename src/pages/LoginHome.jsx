import React from "react";
import LoginForm from "../components/LoginForm";
import Style from "../styles/banner.module.css";

export default function LoginHome() {
  return (
    <>
      <div className="container-fluid 100vh">
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div
            className={`col text-center d-flex align-items-center ${Style.banner}`}
          >
            <h1 className="text-light mx-auto fw-bold">Página de loggeo</h1>
          </div>
          <div className="col text-center p-5">
            <h2 className="mb-4 fw-bold text-light">Inicio de sesión</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
