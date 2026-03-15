const projects = [
    {
        title: "FastX Brand Design",
        category: "Brand Identity",
        year: "2024",
        image: "/projects/project1.png",
        link: "#",
    },
    {
        title: "Flux App Design",
        category: "Product Design",
        year: "2024",
        image: "/projects/project2.png",
        link: "#",
    },
    {
        title: "ScaleAI Marketing Website Design",
        category: "Creative Direction and Website Design",
        year: "2023",
        image: "/projects/project3.png",
        link: "#",
    },
    {
        title: "Shipflow Web Design",
        category: "Product Design",
        year: "2023",
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section id="work" className="w-full max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-end justify-between mb-12">
                <p className="text-xs uppercase tracking-[0.3em] bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">Selected Work</p>
                <span className="text-[#0d0d0d]/45 dark:text-[#f5f5f5]/30 text-sm">({projects.length} projects)</span>
            </div>
            <div className="space-y-0">
                {projects.map((p, i) => (
                    <a key={i} href={p.link} className="group flex items-center gap-6 py-6 border-b border-[#0d0d0d]/15 dark:border-[#f5f5f5]/10 hover:border-purple-500/30 transition-colors no-underline hover:no-underline">
                        <div className="w-16 h-10 bg-[#e0ddd8] dark:bg-[#1a1a1a] rounded overflow-hidden shrink-0">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="flex-1 text-xl md:text-2xl font-black text-[#0e0e0e] dark:text-[#f5f5f5] group-hover:text-purple-500 transition-colors">{p.title}</h3>
                        <span className="text-sm text-[#0d0d0d]/55 dark:text-[#f5f5f5]/40 hidden md:inline-block group-hover:text-purple-400 group-hover:-translate-x-1 transition-all duration-200">{p.category}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
