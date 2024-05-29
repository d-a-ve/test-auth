import { Suspense } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/home";

// TODO: We would make use of code spliting so each page bundle will not be large but for this init, it is fine
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route path="/" element={<Home />} />
    </Route>,
  ),
);

export function TestRouter() {
  return (
    <Suspense
      // TODO: change this text loader once a loader has been implenmented
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <RouterProvider router={routes} />
    </Suspense>
  );
}
