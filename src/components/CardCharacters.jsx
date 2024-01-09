import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CarsContext from '../Context';

const CardCharacters = () => {
    const { cars, addToCart } = useContext(CarsContext);
  
    const navigate = useNavigate();
  
    return (
      <>
        <div style={{ overflowX: 'auto', width: '100%', display: 'flex', flexWrap: 'no-wrap' }}>
          {cars.map((car) => (
            <div key={car.id} className="col m-1 p-1" style={{ minWidth: '15rem' }}>
              <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={car.img} alt={car.name} />
                <div className="card-body">
                  <h4 className="card-title text-center text-capitalize">{car.name}</h4>
                  <hr />
                  <p className="text-center">
                    <b>Características:</b>
                  </p>
                  <ul className="list-unstyled text-center">
                    {car.characteristics.map((characteristic, i) => (
                      <li key={i}>
                        ⭐ {characteristic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-flex justify-content-between mb-4 p-4">
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(car)}
                  >
                    Favoritos
                  </button>
                  <button
                    to={`/cars/${car.id}`}
                    className="btn btn-secondary me-2"
                    onClick={() => navigate(`/cars/${car.id}`)}
                  >
                    Ver Más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default CardCharacters;
