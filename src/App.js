import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage"
import MoviesBooking from "./pages/MoviesBooking";
import MoviesScreen from "./pages/MoviesScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city/movies/:title" element={<MoviePage />} />
        <Route path="/:city/movies/:title/buyTicket" element={<MoviesBooking />} />
        <Route path="/:city/movies/:title/buyTicket/:screen" element={<MoviesScreen />} />
      </Routes>
    </>
  );
}

export default App;
