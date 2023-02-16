import { Routes, Route } from "react-router-dom";

import { Services } from "../pages/Services/Services";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
    </Routes>
  );
}
