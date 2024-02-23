import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute({ isAllowed, redirectTo = "/sign-in", children }) {
 if (!isAllowed) {
  return <Navigate to={redirectTo} />
 }
 return children ? children : <Outlet />
}