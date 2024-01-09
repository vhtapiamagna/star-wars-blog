import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import CarsContext from '../Context';

const Carrito = () => {
  const { carrito, increment, decrement } = useContext(CarsContext);

  return (
    <>
      <div className="carrito p-5">
        <div className="detalles bg-light w-75 m-auto p-5">
          <h5>Detalles del pedido:</h5>
          <div className="p3 bg-white">
            {carrito.map((producto, i) => (
              <div key={i} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={producto.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <button
                    className="btn btn-secondary"
                    onClick={() => decrement(i)}
                  >
                    -
                  </button>
                  <b className="mx-2">{producto.count}</b>
                  <button
                    className="btn btn-dark"
                    onClick={() => increment(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <Link to="/" className="logo-nombre mx-1 mb-0">
            <button className="btn btn-success">Ir a Pagar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;