import React from "react";
import '../assets/css/App.css';
import { useEffect, useState } from 'react'
import UltimoProduct from "./UltimoProduct"

function RowMovies() {

    const [listProducts, setlistProducts] = useState([]);
    useEffect(() => {
        const traedata = async () => {


            const response = await fetch('http://localhost:8001/api/products')

            const data = await response.json()
            setlistProducts(data.data)
        }
        traedata()
    }, []);

    console.log('listProducts:', listProducts);
    const productoinfo = listProducts[listProducts.length - 1];
    console.log('Last Product:', productoinfo)

    // const imagen = '' + {productoinfo}
    // const descripcionProducto = productoinfo.descripcion
    // console.log( productoinfo.descripcion);


    // const productoinfo = listProducts.reverse()
    // console.log(productoinfo)

    const [listUsers, setlistUsers] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/apis/users')
            const data = await response.json()
            setlistUsers(data.data)


        }
        traedata()
    }, []);
    // console.log(listUsers);

    return (
        <>

            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Techtropolis</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Total de Usuarios
                                        </div>

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={listProducts.id}>{listProducts.length}</h5>}</div>

                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-film fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            {" "}
                                            Total de Productos
                                        </div>

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={listUsers.id}>{listUsers.length}</h5>}</div>

                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-award fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Total de categorias
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={listProducts.categoria}>{listProducts.length}</h5>}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">
                                    Ultimo Producto Agregado
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: "40rem" }}
                                        // src= "http://localhost:8001/images/productos/image-1702344739769.png"
                                        alt=" Star Wars - Mandalorian "
                                    />
                                </div>
                                <p>
                                    {/* {<li key={productoinfo.id}>{productoinfo[0].descripcion}</li>} */}
                                </p>
                                <a
                                    className="btn btn-danger"
                                    target="_blank"
                                    rel="nofollow"
                                    href="/"
                                >
                                    View movie detail
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">
                                    Categorias
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">

                                            <div className="card-body">Electrodomesticos</div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">Gamer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RowMovies