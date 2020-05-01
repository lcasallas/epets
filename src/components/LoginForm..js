import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Forms.css'
import { auth } from "../firebase";

const LoginForm = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const signInWithEmailAndPasswordHandler = (event, email, password) => {
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then(result => {
				console.log(result);
			})
			.catch(error => {

				setError("Error signing in with password and email!");
				console.error("Error signing in with password and email", error);
			});
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		}
		else if (name === 'userPassword') {
			setPassword(value);
		}
	};

	return (

		<div className="container">
			<h1>Iniciar Sesión</h1>
			{error !== null && <div >{error}</div>}
			<form>
				<div className="form-group">

					<input
						type="email"
						required="required"
						name="userEmail"
						value={email}
						id="userEmail"
						onChange={(event) => onChangeHandler(event)}
					/>
					<label htmlFor="input" className="control-label">
						Email:
        </label><i className="bar"></i>

				</div>
				<div className="form-group">
					<input
						type="password"
						required="required"
						name="userPassword"
						value={password}
						id="userPassword"
						onChange={(event) => onChangeHandler(event)}
					/>
					<label htmlFor="userPassword" className="control-label">
						Contraseña:
        </label><i className="bar"></i>
				</div>
				<p>	¿No tiene cuenta registrese aqui? <Link to="register" >Registrese</Link> </p>
			</form>
			<div className="button-container">
				<button className="button" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}> <span> Inicia Sesion </span></button>
			</div>
		</div>
	)
}

export default LoginForm