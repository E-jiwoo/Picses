import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Page/Main/index";
import Header from "./Header/index";
import Borrow from "./Pages/Page/Borrow/index";
import Return from "./Pages/Page/Return/index";
import List from "./Pages/Page/List/index";
import BorrowCheck from "./Pages/Check/BorrowCheck/index";
import ReturnCheck from "./Pages/Check/ReturnCheck/index";
import BorrowSuccess from "./Pages/Success/BorrowSuccess/index";
import ReturnSuccess from "./Pages/Success/ReturnSuccess/index";
import BorrowError from "./Pages/Error/BorrowError/index";
import ReturnError from "./Pages/Error/ReturnError/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/borrow" element={<Borrow />}></Route>
          <Route path="/return" element={<Return />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/borrowcheck" element={<BorrowCheck />}></Route>
          <Route path="/returncheck" element={<ReturnCheck />}></Route>
          <Route path="/borrowsuccess" element={<BorrowSuccess />}></Route>
          <Route path="/returnsuccess" element={<ReturnSuccess />}></Route>
          <Route path="/borrowerror" element={<BorrowError />}></Route>
          <Route path="/returnerror" element={<ReturnError />}></Route>
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
