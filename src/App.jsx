import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ThemeToggle from './components/theme/ThemeToggle'
import Landing from './pages/Landing'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
  ])
  return (
    <>
      <RouterProvider router={router}>
        <ThemeToggle />
      </RouterProvider>
    </>
  )
}

export default App
