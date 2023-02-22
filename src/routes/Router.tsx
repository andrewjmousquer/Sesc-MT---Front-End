import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Menu";

import { Services } from "../pages/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/servicos" element={<Services />} />
    </Routes>
  );
}
