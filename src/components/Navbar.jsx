import { Link } from "react-router-dom";
import { useContext } from "react";
import CarsContext from "../Context";

const Navbar = () => {
    const { carrito } = useContext(CarsContext);
    const total = carrito.reduce(
      (valorAnterior, { count, price }) => (valorAnterior + price) * count,
      0
    );
    return (
      <div className="navbar py-1">
        <div className="container d-block">
          <div className="d-flex justify-content-between">
            <Link to="/" className="logo-nombre mx-1 mb-0">
              <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="" style={{ width: '10rem'}}/>
            </Link>
  
            <Link to="/carrito" className="logo-nombre mx-1 mb-0 link-no-underline">
              <h4 className="mb-0 ">
              ⚔️ Favoritos
              {carrito.length > 0 && (
                <span className="badge bg-primary ms-2">{carrito.length}</span>
              )}
              </h4>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;