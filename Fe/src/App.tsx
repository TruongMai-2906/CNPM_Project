import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//@ts-ignore
import HomePage from "./pages/HomePage/HomePage";
//@ts-ignore
import Header from "./components/Header/Header";
//@ts-ignore
import Footer from "./components/Footer/Footer";
//@ts-ignore
import Banner from "./components/Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import WatchFilm from "./pages/WatchFilm/WatchFilm";
import News from "./pages/news/News";
import Introduce from "./pages/Introduce/Introduce";
import Register from "./pages/Register/Register";
import ListGame from "pages/ListGame/ListGame";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* <Header></Header> */}
        <Routes>
          {/* <Route path="/" element={<HomePage/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/watch" element={<WatchFilm/>}/> */}
          <Route
            path="/"
            element={<Navigate to="/games" replace />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/:slug" element={<HomePage />} />
          
          <Route path="/games" element={<ListGame />} />

          {/* <Route path="/introduce" element={<Introduce />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/banner" element={<Banner />} />
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
