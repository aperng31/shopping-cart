import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home"
import Shop from "./Shop";
import Cart from "./Cart";
import "./styles/RouteSwitch.css"

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <div className="container">
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

      </BrowserRouter>

  );
};

export default RouteSwitch;