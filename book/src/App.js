import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./Pages/First/index";
import Header from "./Header/index";
import Register from "./Pages/Register/index";
import Borrow from "./Pages/Borrow/index";
import Return from "./Pages/Return/index";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<First />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/borrow" element={<Borrow />}></Route>
          <Route path="/return" element={<Return />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
