import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCustomQuery } from "../hooks/useTanstackHooks";
import { sessionQuery } from "../query-options";
import { LinkButton } from "./LinkButton";

const authenticatedUserInaccessibleRoutes = ["/login", "/signup"];

export function AuthChecker({ children }: PropsWithChildren) {
  const { data, isLoading, error } = useCustomQuery(sessionQuery);
  // check for the error type for when user is not authenticated
  const isAuthenticatedError =
    error?.error.type === "general_unauthorized_scope";
  const { pathname } = useLocation();

  // check authentification status by fetching api, show loader
  if (isLoading) {
    return <div>Checking authentication status...</div>;
  }

  const isRouteAccessibleToAuthenticatedUser =
    !authenticatedUserInaccessibleRoutes.includes(pathname);

  // if user is not authenticaed and is on a page that requires authentication, redirect to login page
  if (isAuthenticatedError && isRouteAccessibleToAuthenticatedUser) {
    return <Navigate to="/login" />;
  }

  // if user is not authenticated and is on a page that does not require authentication, show the page
  if (isAuthenticatedError && !isRouteAccessibleToAuthenticatedUser) {
    return children;
  }

  // if there is an error different from the unauthenticated error, show the error message
  if (error && !isAuthenticatedError) {
    return (
      <div className="space-y-4 text-center">
        <p>{error.error.message}</p>
        <LinkButton label="Go back home" href="/" />
      </div>
    );
  }

  // if user is authenticated and is on a page that an authenticated user should not be on, redirect to protected page or home pae
  if (data && !isRouteAccessibleToAuthenticatedUser) {
    return <Navigate to="/protected" />;
  }

  // if the user is authnticated and is on a page that requires authentication, show the page
  if (data && isRouteAccessibleToAuthenticatedUser) {
    return <>{children}</>;
  }

  // if none of the above, return null so that no page is shown. Also useful for when the component mounts
  return null;
}
