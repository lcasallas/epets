import React, { useContext, useState } from "react";
import '../assets/styles/components/Forms.css'

const RegisterForm = () => {



    return (

        <div className="container">
            <form>
                <h1>Registrarse</h1>
                <div className="form-group">
                    <input type="email" required="required" />
                    <label htmlFor="input" className="control-label">Correo</label><i className="bar"></i>
                </div>
                <div className="form-group">
                    <input type="password" required="required" />
                    <label htmlFor="input" className="control-label">Contraseña</label><i className="bar"></i>
                </div>

            </form>
            <div className="button-container">
                <button type="button" className="button"><span>Registro</span></button>
            </div>
        </div >
    )
}

export default RegisterForm