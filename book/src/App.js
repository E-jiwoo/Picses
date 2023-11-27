import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Page/Main/index";
import Header from "./Header/index";
import Register from "./Pages/Page/Register/index";
import Borrow from "./Pages/Page/Borrow/index";
import Return from "./Pages/Page/Return/index";
import RegisterCheck from "./Pages/Check/RegisterCheck/index";
import BorrowCheck from "./Pages/Check/BorrowCheck/index";
import ReturnCheck from "./Pages/Check/ReturnCheck/index";
import RegisterSuccess from "./Pages/Success/RegisterSuccess/index";
import BorrowSuccess from "./Pages/Success/BorrowSuccess/index";
import ReturnSuccess from "./Pages/Success/ReturnSuccess/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
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
          <Route path="/registersuccess" element={<RegisterSuccess />}></Route>
          <Route path="/borrowsuccess" element={<BorrowSuccess />}></Route>
          <Route path="/returnsuccess" element={<ReturnSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
`;

export default App;
