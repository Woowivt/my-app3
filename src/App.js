import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Proudct from "./proudct";
import Showprouduct from "./Showproudct";
import Login from "./Login";
import Cart from "./Cart";
import Signup from "./Signup";
import NotFound from "./Notfound";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Proudct />} />
        <Route path="/Product/:Id" element={<Showprouduct />} />
        <Route path="/addtocard" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
