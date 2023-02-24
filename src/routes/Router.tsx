import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Programming } from "../pages/Programing";
import { Services } from "../pages/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/programacao" element={<Programming />} />
    </Routes>
  );
}
