import React, {Component, useState} from "react";
import MapPicker from "../accountBox/mapPicker";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logoS from '../../images/SEGURITA.png'

class ReportForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<header>
    <Navbar bg=" shadow-lg  navbar-expand-lg"  style={{background:"#77C4EE"}}>
    <Container>
        <Navbar.Brand href="#home">
        <img
            src={logoS}
            width="150"
            height="80"
            className="d-inline-block align-top"
            alt="TilCor logo"
        />
        </Navbar.Brand>
    </Container>
    </Navbar> 

     <section class="vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor:" white", minHeight: "100vh"}}>
            <div class="container py-5 h-100 w-100" style={{ maxWidth: '1000px'}} > 
                                <MapPicker />
             </div>
    </section>
</header>
        );
    }
}
export default ReportForm;
