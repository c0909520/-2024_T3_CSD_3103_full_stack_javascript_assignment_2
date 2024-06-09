import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./pages/checkout/checkout";
import UserInfo from "./pages/checkout/userInfo";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar navbaritem1 = "Shop" navbaritem2 = "Contact" />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/contact"
              element={
                <Contact
                  form1="First Name:"
                  form2="Last Name:"
                  form3="Username:"
                  form4="Email address:"
                  form5="Phone number:"
                  form6="Contact us:"
                  form7="Submit form:"
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout
            info1="First Name:"
            info2 = "Last Name:"
            info3 = "Email Address:"
            info4 = "Phone Number:"
            info5="Postal Code:"
            info6= "Enter Card Number:"
            info7 = "Submit form"
            info8 = "Clear"
            />}></Route>
            <Route path="/userinfo" element={<UserInfo></UserInfo>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
