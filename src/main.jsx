import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import Transfer from "./pages/Transfer.jsx";
import NotFound from "./pages/NotFound.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import PrivateLayout from "./layouts/PrivateLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
