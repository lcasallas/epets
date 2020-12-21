import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import '../assets/styles/components/Forms.css'

import { auth, generateUserDocument } from "../firebase";

const RegisterForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {

      setError('La contraseña o el email es invalido');

    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (

    <div className="container">
      <h1>Resgistrate</h1>
      {error !== null && <div >{error}</div>}
      <form>

        <div className="form-group">
          <input
            type="text"
            name="displayName"
            value={displayName}
            id="displayName"
            required="required"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="displayName" className="control-label">username:</label><i className="bar"></i>
        </div>

        <div className="form-group">
          <input
            type="email"
            required="required"
            name="userEmail"
            value={email}
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="control-label">Email:</label><i className="bar"></i>
        </div>

        <div className="form-group">

          <input
            type="password"
            name="userPassword"
            required="required"
            value={password}
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="control-label">Contraseña:</label><i className="bar"></i>
        </div>

        <p>
          ¿Ya tiene cuenta?
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Ingrese aqui
          </Link>
        </p>

      </form>
      <div className="button-container">

        <button
          type="button"
          className="button"
          onClick={event => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        > <span> Registrarse</span>

        </button>
      </div>

    </div>
  )
}

export default RegisterForm