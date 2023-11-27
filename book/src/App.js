import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./Pages/First/index";
import Header from "./Header/index";
import Register from "./Pages/Register/index";
import Borrow from "./Pages/Borrow/index";
import Return from "./Pages/Return/index";
import RegisterCheck from "./Pages/RegisterCheck/index";
import BorrowCheck from "./Pages/BorrowCheck/index";
import ReturnCheck from "./Pages/ReturnCheck/index";

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
          <Route path="/registercheck" element={<RegisterCheck />}></Route>
          <Route path="/borrowcheck" element={<BorrowCheck />}></Route>
          <Route path="/returncheck" element={<ReturnCheck />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
