import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        num: "01",
        title: "SaaS Dashboard",
        category: "Full Stack Development",
        description: "Analytics platform with real-time data , multi-tenant architecture, and Stripe billing.",
        tags: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/project1.png",
        link: "#",
    },
    {
        num: "02",
        title: "E-commerce Platform",
        category: "Frontend + Backend",
        description: "Headless commerce solution with custom CMS, 3D product viewer, and one-click checkout.",
        tags: ["Next.js", "Shopify", "TypeScript"],
        image: "/projects/project2.png",
        link: "#",
    },
    {
        num: "03",
        title: "Developer API",
        category: "Backend Engineering",
        description: "REST + GraphQL API serving 50k+ requests/day with rate limiting and comprehensive docs.",
        tags: ["Node.js", "GraphQL", "Redis"],
        image: "/projects/project3.png",
        link: "#",
    },
    {
        num: "04",
        title: "AI Content Tool",
        category: "AI Integration",
        description: "LLM-powered writing assistant with fine-tuning, custom prompts, and team workspaces.",
        tags: ["Python", "OpenAI", "React"],
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">Selected Work</p>
            <div className="space-y-0">
                {projects.map((p, i) => (
                    <a key={i} href={p.link} className="group block py-6 border-b border-zinc-100 dark:border-zinc-800 no-underline hover:no-underline">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-6 flex-1">
                                <span className="text-xs font-mono text-zinc-300 dark:text-zinc-600 mt-1 shrink-0">{p.num}</span>
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                                        <span className="text-xs text-zinc-400 dark:text-zinc-500">{p.category}</span>
                                    </div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{p.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t, j) => (
                                            <span key={j} className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover image preview + arrow */}
                            <div className="flex items-center gap-3 shrink-0 mt-1">
                                <div className="w-28 h-18 overflow-hidden rounded-md opacity-0 scale-95 -rotate-2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out shadow-md">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
