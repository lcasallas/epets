import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Forms.css'

const LoginForm = () => {


    return (

        <div className="container">
            <form>
                <h1>Iniciar Sesión</h1>
                <div className="form-group">
                    <input type="email" required="required" />
                    <label htmlFor="input" className="control-label">Correo</label><i className="bar"></i>
                </div>
                <div className="form-group">
                    <input type="password" required="required" />
                    <label htmlFor="input" className="control-label">Contraseña</label><i className="bar"></i>
                </div>
                <p>Si no estas registrado, ingresa <Link to="/register">aqui</Link> </p>

            </form>
            <div className="button-container">
                <button type="button" className="button"><span>Ingresa</span></button>
            </div>
        </div >
    )
}

export default LoginForm