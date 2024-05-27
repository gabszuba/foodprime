import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Restaurants from "./pages/restaurant";
import RestaurantMenu from "./pages/restaurantMenu";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header";
import "./assets/styles/index.css";

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      <div className="max-w-5xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes" element={<Restaurants />} />
          <Route path="/restaurantes/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>

  );
}
