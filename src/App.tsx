import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TestMain } from "./components/TestMain"
import { Login } from "./components/pages/auth/Login"
import { Layout } from "./Layout"
import { Register } from "./components/pages/auth/Register"
import { EventPage } from "./components/pages/event/EventPage"
import { CalendarFeedPage } from "./components/pages/calendarFeed/CalendarFeedPage"
import { Profile } from "./components/pages/auth/Profile"
import { NotFound } from "./components/pages/NotFound"

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
        path: '/profil',
        element: <Profile />,
      },
      {
        path: '/registrera',
        element: <Register />,
      },
      {
        path: '/event',
        element: <EventPage />,
      },
      {
        path: '/kalender',
        element: <CalendarFeedPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  },
])

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
