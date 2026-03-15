import { ArrowUpRight, Sun, Moon } from "lucide-react"

const marqueeItems = ["Product Design", "Web Design", "Webflow", "Framer", "Brand Identity", "Art Direction"]

export const Hero = ({ isDark, toggleTheme }) => {
    return (
        <>
            {/* Nav */}
            <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest uppercase text-[#0d0d0d]/65 dark:text-[#f5f5f5]/50">Naveen Studio</span>
                <div className="flex items-center gap-4">
                    <a href="#work" className="text-sm text-[#0d0d0d]/75 dark:text-[#f5f5f5]/60 hover:text-[#0e0e0e] dark:hover:text-[#f5f5f5] transition-colors no-underline hover:no-underline uppercase tracking-wider">Work</a>
                    <a href="mailto:hello@example.com" className="text-sm font-semibold px-4 py-2 border border-[#0e0e0e]/20 dark:border-[#f5f5f5]/20 text-[#0e0e0e] dark:text-[#f5f5f5] hover:bg-[#0e0e0e] hover:text-[#f7f5f0] dark:hover:bg-[#f5f5f5] dark:hover:text-[#0e0e0e] transition-all no-underline hover:no-underline uppercase tracking-wider">Hire Me</a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 border border-[#0d0d0d]/20 dark:border-[#f5f5f5]/15 hover:bg-[#0e0e0e]/5 dark:hover:bg-[#f5f5f5]/10 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-20 animate-fade-in">
                <div className="mb-4">
                    <span className="text-sm font-medium uppercase tracking-[0.3em] bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">Full Stack Designer</span>
                </div>
                <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-tight mb-6 overflow-hidden text-[#0e0e0e] dark:text-[#f5f5f5]">
                    <span className="block">Full Stack</span>
                    <span className="block text-stroke">Design Studio</span>
                </h1>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-8">
                    <p className="text-lg text-[#0d0d0d]/75 dark:text-[#f5f5f5]/60 max-w-md leading-relaxed">
                        I craft bold visual identities, engaging interfaces, and memorable brand experiences for ambitious companies.
                    </p>
                    <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-lg font-semibold group no-underline hover:no-underline bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                        Start a project
                        <ArrowUpRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </section>

            {/* Scrolling Marquee */}
            <div className="border-y border-[#0d0d0d]/15 dark:border-[#f5f5f5]/10 py-3 overflow-hidden">
                <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="mx-6 text-sm font-semibold uppercase tracking-widest text-[#0d0d0d]/45 dark:text-[#f5f5f5]/30">
                            {item} <span className="mx-3 text-purple-500">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}
