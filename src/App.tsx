import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingLayout from "./layouts/LoadingLayout";
import RootLayout from "./layouts/RootLayout";
import { useAppDispatch } from "./redux/hooks";
import { callAllTokens } from "./redux/tokens/actions";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const NotFindPage = lazy(() => import("./pages/404/NotFindPage"));
const FarmsPage = lazy(() => import("./pages/farms/FarmsPage"));
const LiquidityPage = lazy(() => import("./pages/liquidity/LiquidityPage"));
const PoolsPage = lazy(() => import("./pages/pools/PoolsPage"));

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(callAllTokens());
  }, []);
  return (
    <>
      <LoadingLayout />
      <Routes>
        {/* HEADER FOOTER AND OUTER GLOBAL ITEM */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RootLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="roadmap"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <h1>Road Map</h1>
              </Suspense>
            }
          />

          <Route
            path="liquidity"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LiquidityPage />
              </Suspense>
            }
          />

          <Route
            path="pools"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PoolsPage />
              </Suspense>
            }
          />

          <Route
            path="farms"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FarmsPage />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFindPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
