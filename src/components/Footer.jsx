import React from 'react'
import Logo from "../images/proximatelogo.png";
import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill } from 'react-icons/ri'
import { BiMapAlt, BiPhone } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'

export function FooterMenu({title, subtitle}) {
    return (
        <div className="col">
            <p style={{color: '#FFF', fontWeight: '500'}} className="fs-5">{title}</p>
            <p className="d-inline text-light" style={{fontWeight: '400'}}>{subtitle}</p>
        </div>
    )
}

export default function Footer() {
  return (
    <footer className="p-5 text-center" style={{background: '#0a0a0a'}}>
            <div className="d-flex flex-row justify-content-center align-items-center gap-5 mb-5">
                <a href="https://web.facebook.com/HotelAmbeyma" target="_blank" rel="noreferrer">
                    <div><RiFacebookCircleFill className="fs-2" style={{color: '#FFF'}} /></div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=573115905930&text=Hola!." target="_blank" rel="noreferrer">
                    <div><RiWhatsappFill className="fs-2" style={{color: '#FFF'}} /></div>
                </a>
                <a href="https://www.instagram.com/hosteria_ambeyma/" target="_blank" rel="noreferrer">
                    <div><RiInstagramFill className="fs-2" style={{color: '#FFF'}} /></div>
                </a>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center mb-5 align-items-center gap-5">
                <FooterMenu title={[<BiMapAlt className="fs-5 me-2" style={{color: '#FFF'}} />,"Dirección"]} subtitle="Cr 11° No. 93° - 22" />
                <FooterMenu title={[<BiPhone className="fs-5 me-2" style={{color: '#FFF'}} />,"Telefono"]} subtitle="+571 7711375" />
                <FooterMenu title={[<GoMail className="fs-5 me-2" style={{color: '#FFF'}} />,"Email"]} subtitle="info@proximateapps.com" />
            </div>
            <div className="row align-items-center">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={Logo} alt="Logo Ambeyma" width="50px" />
                </div>
            </div>
        </footer>
  )
}
