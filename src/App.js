import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";
import{shopConextProvider} from "./Context/shopContext";
function App() {
  return (
    <div className="App">
      <shopConextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
      </shopConextProvider>
    </div>
  );
}

export default App;
