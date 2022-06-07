import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from "../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logo.jpg'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()  //para poder usar en el form lo que creamos en AuthContext
    const [error, setError] = useState('') //vacio porque no va a tener un error por default
    const [loading, setLoading] = useState(false) //como estado inicial no estamos cargando nada
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault() //prevent our form to refresh


        try {
            setError('') //antes de intentar cualquier cosa queremos resetear el mensaje de error
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/report")
        } catch(error) {
            console.log(error)
            setError('El email o la contraseña no es correcta')
        }
        setLoading(false)

    }
    return (
        <section class="vh-100" style={{backgroundColor:" lightblue"}}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{borderRadius: "1rem",  boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block" style={{backgroundColor: "#095E3D",borderRadius:" 1rem 0 0 1rem"}}>
                                    <img src={logo}
                                         alt="login form" class="img-fluid" style={{borderRadius:" 1rem 0 0 1rem", objectFit:"contain"}} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <h2 className="text-center mb-4">Iniciar sesión</h2>
                                        {error && <Alert variant="danger">{error}</Alert>}
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group id="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" ref={emailRef} required />
                                            </Form.Group>
                                            <Form.Group id="password">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="password" ref={passwordRef} required />
                                            </Form.Group>

                                            <div className="w-100 text-center mt-3">
                                                <Link to="/forgot-password" style={{color: "Grey"}}>¿Olvidaste tu contraseña?</Link>
                                            </div>
                                            <p>     </p>
                                            <button class="colorb" disabled={loading}  type="submit">
                                                Iniciar sesión
                                            </button>
                                        </Form>

                                        <div className="w-100 text-center mt-2" style={{color: "Grey"}}>
                                            ¿No tienes una cuenta? <Link to="/signup" style={{color: "rgb(228, 170, 35)"}}>Registrarse</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}