import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./Pages/First/index";
//import Header from "./Header/index";
import Register from "./Pages/First/register/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<First />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/borrow" element={<Borrow />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
