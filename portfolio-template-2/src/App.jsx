import { useState } from "react"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"

const App = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="relative min-h-screen overflow-clip bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <main>
          <Hero isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
