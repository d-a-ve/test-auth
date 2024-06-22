import { Suspense } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthChecker } from "./components/AuthChecker";
import { InlinePaddingContainer, MaxContainer } from "./components/Container";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Protected } from "./pages/protected";
import { Signup } from "./pages/signup";

// TODO: We would make use of code spliting so each page bundle will not be large but for this init, it is fine
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route
        element={
          <MaxContainer>
            <InlinePaddingContainer>
              <div className="flex min-h-svh w-full items-center justify-center">
                <AuthChecker>
                  <Outlet />
                </AuthChecker>
              </div>
            </InlinePaddingContainer>
          </MaxContainer>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/protected" element={<Protected />} />
      </Route>
    </>,
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
