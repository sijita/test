import React from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { CgLogOut } from "react-icons/cg";
import {FiMenu} from "react-icons/fi"
import { useContext } from "react";
import UserContext from "../context/AuthContext";
import Logo from '../images/proximatelogo.png'
import styles from '../styles/header.module.css'

export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => {
    setCredentials()
    window.localStorage.removeItem("logged")
  }

  const { credentials, setCredentials } = useContext(UserContext)

    // const user = JSON.parse(credentials.data).name
  

  return (
    <>
      <Navbar className="p-4" style={{backgroundColor: '#0a0a0a'}} dark>
        <NavbarBrand className="fs-2" href="/home" style={{fontWeight: '600'}}>
          <img className={styles.logo} src={Logo} alt="Logo" width="50px" />&nbsp;
          ProximateApps
        </NavbarBrand>
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
            <Link
              className="rounded"
              style={{textDecoration: 'none'}}
              to="/home"
            >
              <button className="w-100 border-0 btn btn-dark d-flex justify-content-center align-items-center gap-3"
                onClick={handleClose}
                style={{backgroundColor: '#151515'}}
              >
                <TiHome className="fs-5 text-light" />
                <span className=" fs-4 text-light">
                  Inicio
                </span>
              </button>
            </Link>
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
