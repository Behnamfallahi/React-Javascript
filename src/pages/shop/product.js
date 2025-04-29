import { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
const{cartItems , addToCart , removeFromCart} = useContext(ShopContext)
  return (
    <div className="col-3 mb-4">
      <div
        style={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <img
          src={productImage}
          style={{ height: "100%", objectFit: "cover" }}
          alt={productName}
        />
      </div>

      <h5 className="mt-2 text-center">{productName}</h5>
      <p className="text-center">price:{price}$</p>
      <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">{cartItems.filter((row) => row.id === id)[0].count}</span>
      <button className="btn btn-info btn-sm">+</button>
    </div>
  );
};
export default Product;
