import React from "react";
import '../assets/css/App.css'


function Topbar() {
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>nombre</th>
                                    <th>apellido</th>
                                    <th>email</th>
                                    <th>categori</th>
                                    <th>images</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>id</th>
                                    <th>nombre</th>
                                    <th>descripcion</th>
                                    <th>categoria</th>
                                    <th>precio</th>
                                    <th>descuento</th>
                                    <th>color</th>
                                    <th>imagen</th>
                                    
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </>
    )

}

export default Topbar