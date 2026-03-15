import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "SaaS Dashboard",
        category: "Full Stack Development",
        tags: ["React", "Node.js"],
        image: "/projects/project1.png",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        category: "Frontend + Backend",
        tags: ["Next.js", "TypeScript"],
        image: "/projects/project2.png",
        link: "#",
    },
    {
        title: "Developer API",
        category: "Backend Engineering",
        tags: ["Node.js", "GraphQL"],
        image: "/projects/project3.png",
        link: "#",
    },
    {
        title: "AI Content Tool",
        category: "AI Integration",
        tags: ["AWS", "MongoDB"],
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section id="work" className="w-full max-w-6xl mx-auto px-8 py-6">
            <div className="border-b border-neutral-200 py-4 flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Selected Work</p>
                <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">{projects.length} Projects</span>
            </div>

            {/* 2x2 Grid */}
            <div className="grid md:grid-cols-2">
                {projects.map((p, i) => (
                    <a key={i} href={p.link}
                        className={`group block bg-white hover:bg-neutral-50 ${i % 2 === 0 ? 'md:border-r border-neutral-200' : ''} border-b border-neutral-200 transition-colors no-underline hover:no-underline`}>
                        {/* Image */}
                        <div className="aspect-video overflow-hidden border-b border-neutral-200 bg-neutral-100">
                            <img src={p.image} alt={p.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Content */}
                        <div className="p-7 flex items-start justify-between">
                            <div>
                                <div className="flex gap-1.5 mb-3">
                                    {p.tags.map((t, j) => (
                                        <span key={j} className="text-[9px] font-bold uppercase border border-neutral-300 text-neutral-500 px-2 py-0.5 tracking-wide">{t}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">{p.title}</h3>
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">{p.category}</p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-neutral-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
