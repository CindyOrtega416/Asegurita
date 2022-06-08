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
   
     <section >
          <div className= "nav" style={{backgroundColor:'#77C4EE', width:'100vw'}}>
        <img
            src={logoS}
            width="150"
            height="80"
            alt="TilCor logo"/>
          </div>
            <div  > 
                 <MapPicker />
             </div>
    </section>

        );
    }
}
export default ReportForm;
