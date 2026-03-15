import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "SaaS Dashboard",
        category: "Full Stack Development",
        description: "Analytics platform with real-time data , multi-tenant architecture, and Stripe billing.",
        tags: ["React", "Node.js", "PostgreSQL"],
        image: "/projects/project1.png",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        category: "Frontend + Backend",
        description: "Headless commerce solution with custom CMS, 3D product viewer, and one-click checkout.",
        tags: ["Next.js", "TypeScript", "Shopify"],
        image: "/projects/project2.png",
        link: "#",
    },
    {
        title: "Developer API",
        category: "Backend Engineering",
        description: "REST + GraphQL API serving 50k+ requests/day with rate limiting and comprehensive docs.",
        tags: ["Node.js", "GraphQL", "Docker"],
        image: "/projects/project3.png",
        link: "#",
    },
    {
        title: "AI Content Tool",
        category: "AI Integration",
        description: "LLM-powered writing assistant with fine-tuning, custom prompts, and team workspaces.",
        tags: ["OpenAI", "Next.js", "MongoDB"],
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section id="work" className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-zinc-100">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-2">Selected Work</p>
                    <h2 className="text-3xl font-bold text-zinc-900">Recent projects</h2>
                </div>
                <span className="text-sm text-zinc-400">{projects.length} projects</span>
            </div>

            {/* List style like template 2 */}
            <div className="space-y-0">
                {projects.map((p, i) => (
                    <a key={i} href={p.link}
                        className="group flex items-start gap-6 py-7 border-b border-zinc-100 hover:border-zinc-300 no-underline hover:no-underline transition-colors">
                        {/* Thumbnail */}
                        <div className="w-20 h-14 rounded-lg overflow-hidden bg-zinc-100 shrink-0 hidden sm:block">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">{p.title}</h3>
                                <span className="text-xs text-zinc-400">{p.category}</span>
                            </div>
                            <p className="text-sm text-zinc-500 mb-3 leading-relaxed">{p.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t, j) => (
                                    <span key={j} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded font-medium">{t}</span>
                                ))}
                            </div>
                        </div>

                        <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </a>
                ))}
            </div>
        </section>
    )
}
