import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;