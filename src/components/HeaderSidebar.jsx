import React from "react";
import { Navbar, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { CgLogOut } from "react-icons/cg";
import {FiMenu} from "react-icons/fi"
import { useContext } from "react";
import UserContext from "../context/AuthContext";
import Logo from '../images/proximatelogo.png'
import styles from '../styles/header.module.css'
import { useProducts } from "../hooks/getProducts";

export default function Products() {
  const [show, setShow] = useState(false);

  const { setCredentials } = useContext(UserContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => {
    setCredentials()
    window.localStorage.removeItem("logged")
  }

    // const user = JSON.parse(credentials.data).name
    let activeStyle = {
      textDecoration: "none",
      backgroundColor: '#232323',
      color: "#00000"
    };

    let desactiveStyle = {
      textDecoration: "none",
      backgroundColor: "#151515",
      color: "#FFFFF",
    }
  

  return (
    <>
      <Navbar className="p-4" style={{backgroundColor: '#0a0a0a'}} dark>
        <NavLink className="fs-2" to="/home" style={{fontWeight: '600', textDecoration: 'none', color: '#FFF'}}>
          <img className={styles.logo} src={Logo} alt="Logo" width="50px" />&nbsp;
          ProximateApps
        </NavLink>
        {/* <div className="text-light fs-5">
          Bienvenido: {user}
        </div> */}
        <Button
          className="fs-4 btn-lg border-0"
          style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
          onClick={handleShow}
        >
          <FiMenu />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{backgroundColor: '#0a0a0a'}}
        >
          <Offcanvas.Header className="btn-close-white" closeButton>
            <Offcanvas.Title className="fs-3 text-dark p-3 fw-bold">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr className="text-light m-0" />
          <Offcanvas.Body className="d-flex flex-column p-4">
            <NavLink
              className="rounded"
              to="/home"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              end
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className="fs-5 text-light ">
                  Inicio
                </span>
                
                <TiHome className="fs-5 text-light"  />
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              to="/home/1/xtracking"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className="fs-5 text-light">
                  Xtracking
                </span>
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              to="/home/2/colmedica"
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className=" fs-5 text-light">
                  Colmédica
                </span>
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              to="/home/3/efecty"
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className=" fs-5 text-light">
                  Efecty
                </span>
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              to="/home/4/colmena"
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className=" fs-5 text-light">
                  Colmena
                </span>
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              to="/home/5/medplus"
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className=" fs-5 text-light">
                  Medplus
                </span>
              </button>
            </NavLink>
            <NavLink
              className="rounded mt-3"
              style={({ isActive }) =>
                isActive ? activeStyle : desactiveStyle
              }
              to="/home/6/urosario"
            >
              <button className="w-100 border-0 btn d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
              >
                <span className=" fs-5 text-light">
                  U. del Rosario
                </span>
              </button>
            </NavLink>
            <button
              className="btn btn-outline-light mt-auto justify-content-center fs-5 d-flex align-items-center gap-3"
              onClick={logout}
            >
              <CgLogOut />
              Cerrar sesión
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
}
