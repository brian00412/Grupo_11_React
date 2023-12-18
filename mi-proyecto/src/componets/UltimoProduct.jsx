import React from "react";
import { useEffect, useState } from 'react'

function UltimoProduct() {
    const [listProducts, setlistProducts] = useState([]);
    useEffect(() => {
        const traedata = async () => {
            const response = await fetch('http://localhost:8001/apis/products')
            const data = await response.json()
            setlistProducts(data.data)
        }
        traedata()
    }, []);

    console.log('listProducts:', listProducts);
    const productoinfo = listProducts[listProducts.length - 1];
    console.log('Last Product:', productoinfo)

    return (
        <>
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
                                        // src= ' http://localhost:8001/images/productos/'{...productoinfo.imagen}
                                        alt=" Star Wars - Mandalorian "
                                    />
                                </div>
                                {/* {((<li key={productoinfo.id}>{productoinfo.nombre}</li>))} */}
                                <p>
                                    {/* {((<li key={productoinfo.id}>{productoinfo.descripcion}</li>))} */}
                                    {/* {<li key={productoinfo.id}>{productoinfo.nombre}</li>} */}
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
                

            </>
            )
}

            export default UltimoProduct