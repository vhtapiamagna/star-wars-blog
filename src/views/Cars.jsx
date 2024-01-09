import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarsContext from '../Context';

const Detalle = () => {
    const [carDetail, setCarDetail] = useState({});
    const { cars, addToCart } = useContext(CarsContext);
    const { id } = useParams();

const obtenerDatos = () => {
    const datosCar = cars.find((car) => car.id === id);
    setCarDetail(datosCar);
  };


  useEffect(() => {
    obtenerDatos();
  }, [cars]);

  return (
    <>
      <div className="container mt-2">
        <div className="mb-6">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={carDetail.img}
                className="img-fluid estilos rounded-start"
                alt={carDetail.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="card-title text-capitalize text-center">
                  {carDetail.name}
                </h2>
                <h4 className="card-text">{carDetail.desc}</h4>
                <div className="d-flex justify-content-around">
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(carDetail)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;