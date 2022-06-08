import "../App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ReportForm from "./accountBox/ReportForm";
import {AuthProvider} from "../contexts/AuthContext";
import Signup from "./authentication/Signup";
import { Container } from 'react-bootstrap';
import Login from "./authentication/Login";
import ForgotPassword from "./authentication/ForgotPassword";
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../firebase";
import Database from "./database";
import MapTest from "./MapTest";
import Register from "./authentication/Register"
import MapComp from "./MapTest";



function App() {

    return (
        <Container >

            <div>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route path="/signup" exact>
                                <Signup />
                            </Route>
                            <Route path="/" exact>
                                <Login />
                            </Route>
                            <Route path="/report" exact>
                                <ReportForm />
                            </Route>
                            <Route path="/forgot-password" exact>
                                <ForgotPassword />
                            </Route>
                            <Route path="/database" exact>
                                <Database />
                            </Route>
                            <Route path="/map" exact>
                                <MapComp />
                            </Route>
                            <Route path="/register" exact>
                                <Register />
                            </Route>
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>

    );
}

export default App;
