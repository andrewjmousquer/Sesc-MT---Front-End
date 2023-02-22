import { Routes, Route } from "react-router-dom";

import { Services } from "../pages/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/servicos" element={<Services />} />
    </Routes>
  );
}
