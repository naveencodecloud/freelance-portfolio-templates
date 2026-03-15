import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"

const App = () => {
  return (
    <div className="relative min-h-screen overflow-clip bg-white text-[#0f0f0f]">
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
