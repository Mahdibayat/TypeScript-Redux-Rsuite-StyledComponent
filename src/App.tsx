import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import TradePage from "./pages/trade/TradePage";

const HomePage = lazy(() => import("./pages/home/HomePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* HOME PAGE */}
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />

        {/* TRADE PAGE */}
        <Route
          path="trade"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TradePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
