import React from "react";
import "../assets/css/app.css"


const nombre = ["MOVIES IN DATA BASE", "TOTAL AWARDS" , "ACTORS QUANTITY"]
const colortext = ["blue","green","yellow"]
const colors = ["blue","green","yellow"]
const valores = [21, 79, 49]

function Tarjeta(props){

    return(
        <div className="col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2" style={color=props.colors}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={color=props.colortext}>
                                            {props.nombre}
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.valores}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-film fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )

}

export default Tarjeta;