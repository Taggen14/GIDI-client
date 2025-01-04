import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TestMain } from "./components/TestMain"
import { Login } from "./components/pages/login/Login"
import { Layout } from "./Layout"
import { Register } from "./components/pages/login/Register"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TestMain />
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registrera',
        element: <Register />,
      }
    ]
  },
])

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
