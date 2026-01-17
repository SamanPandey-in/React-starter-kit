import ThemeToggle from './components/theme/ThemeToggle'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <div className="text-black dark:text-white">
        <ThemeToggle />
        <Landing />
      </div>

    </>
  )
}

export default App
