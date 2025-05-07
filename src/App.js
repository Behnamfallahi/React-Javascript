import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";
import { ShopContextProvider } from "./Context/shopContext-context";
import Welcome from "./components/welcome";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Welcome/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
