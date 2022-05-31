import {db} from "../firebase";
import firebase from "firebase/compat";

export default function MapTest() {

    var temp = {}
    const fs = require('fs');
    const db = firebase.firestore();
    let query = db.collection('users')
    let data = query.get().then(async snapshot => {
        let temp = JSON.stringify(snapshot)
        await fs.writeFile ("../serversettings.json", temp, function(err) {
           if (err) throw err;
           console.log('done');
        })
    })

    return (

        <div className="app">
           
        </div>
    );
    }