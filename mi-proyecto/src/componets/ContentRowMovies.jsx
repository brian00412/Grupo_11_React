import React, { Profiler } from "react";
import '../assets/css/App.css';
import { useEffect, useState } from 'react'
import UltimoProduct from "./UltimoProduct"

function RowMovies() {

    const [listprueba, setlistprueba] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/api/products')
            const data = await response.json()
            setlistprueba(data)
        }
        traedata()
    }, []);
    console.log(listprueba);

///// Ultimo Producto obtenido

    const [listProducts, setlistProducts] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/api/products')
            const data = await response.json()
            setlistProducts(data.data)
        }
        traedata()
    }, []);

    let prodcutoId = null
    let productoinfo = null;
    if (listProducts.length > 0) {
        productoinfo = listProducts[listProducts.length - 1];
        prodcutoId = productoinfo.detalle
        console.log('Last Product:', productoinfo);
        console.log(prodcutoId);
    }


//// contador de producto por categoria 

    const [listcategoria, setlistcategoria] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/api/products')
            const data = await response.json()
            setlistcategoria(data.meta.totalPorCategoria)
        }
        traedata()
    }, []);
    console.log(listcategoria);
    const caracteristica = Object.keys(listcategoria)
    console.log(caracteristica);
////

    const [productoinformacion, setproductoinfo] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/api/products')
            const data = await response.json()
            setproductoinfo(data)
        }
        traedata()
    }, []);
    console.log(productoinformacion);
    //// users Contador
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

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={listUsers.id}>{listUsers.length}</h5>}</div>

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

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={listProducts.id}>{listProducts.length}</h5>}</div>

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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{<h5 key={caracteristica}>{caracteristica.length}</h5>}</div>
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
                                    {/* <img
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: "40rem" }}
                                        src={productoinfo && productoinfo.detalle}
                                        alt=" ultimo producto "
                                    /> */}
                                    {productoinfo && <h2 key={productoinfo.id}>{productoinfo.nombre}</h2>}
                                </div>
                                <p>
                                    {productoinfo && <li key={productoinfo.id}>{productoinfo.descripcion}</li>}
                                </p>
                                <a
                                    className="btn btn-danger"
                                    target="_blank"
                                    rel="nofollow"
                                    href={productoinfo && productoinfo.detalle}
                                >
                                     Descripcion del Producto
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

                                            <div className="card-body">{caracteristica && <h4 key={caracteristica}>{caracteristica[1]}</h4>}</div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{caracteristica && <h4 key={caracteristica}>{caracteristica[0]}</h4>}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Electrodomestico
                                        </div>

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{listcategoria && <li key={listcategoria.id}>{listcategoria.Electrodomesticos}</li>}</div>
                                        
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-film fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Gamer
                                        </div>

                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{listcategoria && <li key={listcategoria.id}>{listcategoria.Gamer}</li>}</div>

                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-film fa-2x text-gray-300" />
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