import React from "react";
import { useEffect, useState } from 'react'

function Producto() {
    const [listProducts, setlistProducts] = useState([]);
    useEffect(() => {
      const traedata = async () => {
        const response = await fetch('http://localhost:8001/api/products')
        const data = await response.json()
        setlistProducts(data.data)
      }
      traedata()
    }, []);
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
                    <th>descripcion</th>
                    <th>detalle</th>
                    
                    
                   
                    
                  </tr>
                </thead>
                <tfoot>

                  {listProducts.map(producto => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion.toString()}</td>
                      <td><a href={producto.detalle}>{producto.detalle}</a></td>
                     
                
                      
                    </tr>
                  ))}
                  {/* <th>id  </th>{listProducts.map(producto => (<li key={producto.id}>{producto.id}</li>))} */}
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

export default Producto