import React, {useEffect, useRef, useState} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../App.css';
import 'leaflet/dist/leaflet.css';

import denuncias from '../../denuncias.json';
import {addDoc, collection, GeoPoint, getDocs} from "@firebase/firestore";
import {db} from "../../firebase";
import firebase from "firebase/compat";
import * as ELG from "esri-leaflet-geocoder";
import {Button} from "bootstrap";
import Link from "@material-ui/core/Link";

//delete L.Icon.Default.prototype._getIconUrl;


/*
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../images/marker-icon-2x.png').default,
    iconUrl: require('../../images/marker-icon.png').default,
    shadowUrl: require('../../images/marker-shadow.png').default
});
*/



function MapPicker() {

    const [storeData, setStoreData] = useState([]);





    const mapRef = useRef();

    useEffect(() => {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        if ( !map ) return;
        



      //  L.marker([50.5, 30.5], []).addTo(map);
/*        export function createMarker(latitude,longitude,popupContent){

            L.marker([latitude,longitude]).addTo(map)
                .bindPopup(popupContent);
        }*/

/*        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data()
            })))
            //en la linea de arriba estamos recorriendo la coleccion y guardanco cada dato del documento en un array y tambien
            //trayendo el id de cada documento
        };

       getUsers();*/


       //const usersList = []


      /*     const usersRef = firebase.database().ref('users')
           usersRef.on('value', (snapshot) => {
               setData({...snapshot.val()})

               console.log(data)

               /!*const usersVal = snapshot.val()
               for (let id in usersVal) {
                   usersList.push(usersVal[id])
*!/
               }
            )*/
       /*    {
               try {
                   Object.keys(data).map((id, index) => {
                       console.log(data[id].img)
                       locations.push([data[id].issue, data[id].address.lat, data[id].address.lon, data[id].img])
                       console.log(locations)

                       for (let i = 0; i < locations.length ;i++) {
                           new L.marker([locations[i][1], locations[i][2]])
                               .bindPopup("<img src = ' " + locations[i][3] + "' />" + locations[i][0])
                               .addTo(map)

                       }
                       /!*        let markers = []
           locations.forEach((element, i) => {
               markers[i] = L.marker([element[1], element[2]]).addTo(map)
                   .bindPopup("<img src = ' " + element[3] + "' />" + element[0])
           })*!/
                   })
               } catch (err) {
                   console.log(err)
               }
           }
*/






                    /*      console.log(locations[i][3])

                  })}

                 // console.log(usersList)


                 /* {
                      let locations = []
                      {
                          if (usersList) {
                              usersList.map((userVal) => {
                                  console.log(userVal)
                                  locations.push([userVal.issue, userVal.address.lat, userVal.address.lon, userVal.img])
                              })

                              /!*   (async () => {
                                     setContent(await getContentData())
                                 }) ();*!/

                              console.log(locations)

                          } else {
                              return ('')
                          }
                      }

                      console.log(locations)
                      for (let i = 0; i < locations.length; i++) {*/
                /*new L.marker([34.07381780761041, -118.44177995896911])
                   /!* .bindPopup("<img src = ' " + locations[i][3] + "' />" + locations[i][0])*!/
                    .addTo(map)*/
          /*      console.log(locations[i][3])

                console.log('kasemaster')
            }
        }
*/




    }, [])

    
    useEffect(() => {
        const fetchData = () => {
            let tmp = []
            const usersRef = firebase.database().ref('users')
            usersRef.on('value', (snapshot) => {
                    snapshot.forEach(doc => {
                        tmp.push(doc.val())
                    })
                setStoreData(tmp);
            
                   /* setLocations(locations)
                    console.log(locations)*/

                    /*const usersVal = snapshot.val()
                    for (let id in usersVal) {
                        usersList.push(usersVal[id])
     */
                })
        }
        
        fetchData()

    }, [])

    function handleOnFlyTo() {

            const { current = {} } = mapRef;
            const { leafletElement: map } = current;
    
            if ( !map ) return;

            storeData.map(x => {
                 map.flyTo([x.address.lat, x.address.lon], 14, { 
                    essential: true, 
                    duration :2})
            })
       
    }



    return (
        <div>
        
            <div>
                <Map ref={mapRef} center={[-31.4167, -64.18]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                    {
                        storeData.map(x => {
                            console.log([x.issue, x.address.lat, x.address.lon, x.img])
                            if (!x.img){
                            return (
                                <Marker position={[x.address.lat, x.address.lon]}>
                                    <Popup>
                                        <p>{x.issue}</p>
                                    </Popup>
                                </Marker>

                        )} else {
                                return (
                                    <Marker position={[x.address.lat, x.address.lon]}>
                                        <Popup>
                                        <h5>{x.issue}</h5>
                                            <img
                                                src={x.img}
                                                width="150px"
                                                height="150px"
                                                
                                            />
                                        </Popup>
                                    </Marker>
                                )
                            }
                        })
                    }

                </Map>
            </div>
            <section class='col-lg-6 my-4  align-items-center' style={{backgroundColor:" #77C4EE",borderRadius:"12px", marginLeft:"-2000"}}>

                <p style={{ color: 'white',
                    fontWeight: "900", fontSize: "20px", textAlign:"left" }}>Denuncias</p>
                {
                    storeData.map(x => {
                        return (
                            <div>

                                    <ul >
                                        <li>
                                            <button onClick={handleOnFlyTo}> {x.issue}<br/></button>
                                           
                                        </li>
                                    </ul>

                            </div>
                        )
                    })
                }
            </section>
        </div>
    );
}


export default MapPicker;