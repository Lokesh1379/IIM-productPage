import { memo } from "react";
import NavComponent from "./Components/Navbar/index";
import FooterComponent from "./Components/Footer";
import ProductDetails from "./Components/Products";
import "./App.css"
import OtherProducts from "./Components/OtherProducts";
const App = () => {
  return <>
    <div className="main-container">
      <NavComponent />
      <ProductDetails />
      <OtherProducts />
      <FooterComponent />

    </div>
  </>
}

export default memo(App)