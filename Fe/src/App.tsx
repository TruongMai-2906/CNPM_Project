import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//@ts-ignore
import HomePage from "./pages/HomePage/HomePage.tsx";
//@ts-ignore
import Header from "./components/Header/Header.tsx";
//@ts-ignore
import Footer from "./components/Footer/Footer.tsx";
//@ts-ignore
import Banner from "./components/Banner/Banner.tsx";
import Detail from "./pages/Detail/Detail.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import WatchFilm from "./pages/WatchFilm/WatchFilm.tsx";
import Slider from "./pages/slider/Slider.tsx";
import Introduce from "./pages/Introduce/Introduce.tsx";
import Register from "./pages/Register/Register.tsx";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          {/* <Route path="/" element={<HomePage/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/watch" element={<WatchFilm/>}/> */}
          <Route path="/slice" element={<Slider />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/register" element={<Register />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
