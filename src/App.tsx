import { Footer } from "./components/Footer"
import { Header } from "./components/header/Header"

function App() {

  return (
      <div className="bg-white dark:darkmode-main flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex justify-center">
          <p className="text-3xl font-bold underline">main app!!</p>
        </main>
        <Footer />
      </div>
  )
}

export default App
