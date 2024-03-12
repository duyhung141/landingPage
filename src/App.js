import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThankYouPage from "./page/ThankYouPage/ThankYouPage";

function App() {

  return (
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/thank-you" element={<ThankYouPage/>} />
              <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;