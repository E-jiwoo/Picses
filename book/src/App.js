import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Page/Main/index";
import Header from "./Header/index";
import Register from "./Pages/Page/Register/index";
import Borrow from "./Pages/Page/Borrow/index";
import Return from "./Pages/Page/Return/index";
import RegisterCheck from "./Pages/Check/RegisterCheck/index";
import BorrowCheck from "./Pages/Check/BorrowCheck/index";
import ReturnCheck from "./Pages/Check/ReturnCheck/index";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
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
