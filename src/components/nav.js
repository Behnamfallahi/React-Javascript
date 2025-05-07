import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContext } from "../Context/shopContext-context";
import "../components/nav.css";
const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const ItemCont = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">Behnam fallahi</a>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />

              {ItemCont > 0 && <span className="cart-items-count">{ItemCont}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
