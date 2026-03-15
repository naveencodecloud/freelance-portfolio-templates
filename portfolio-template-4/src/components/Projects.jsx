import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "SaaS Dashboard",
        category: "React · TypeScript · Node.js",
        description: "Analytics platform with real-time data, multi-tenant architecture, and Stripe billing.",
        image: "/projects/project1.png",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        category: "Next.js · TypeScript · PostgreSQL",
        description: "Headless commerce solution with custom CMS, 3D product viewer, and one-click checkout.",
        image: "/projects/project2.png",
        link: "#",
    },
    {
        title: "Developer API",
        category: "Node.js · GraphQL · Docker",
        description: "REST + GraphQL API serving 50k+ requests/day with rate limiting and comprehensive docs.",
        image: "/projects/project3.png",
        link: "#",
    },
    {
        title: "AI Content Tool",
        category: "Next.js · AWS · MongoDB",
        description: "LLM-powered writing assistant with fine-tuning, custom prompts, and team workspaces.",
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section id="work" className="w-full max-w-6xl mx-auto px-6 py-16">
            <p className="text-violet-400 text-xs uppercase tracking-widest mb-8 font-semibold">Featured Work</p>
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((p, i) => (
                    <a key={i} href={p.link} className="group glass glass-hover rounded-2xl overflow-hidden no-underline hover:no-underline block">
                        {/* Image with overlay */}
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <h3 className="absolute bottom-4 left-5 text-lg font-bold text-white">{p.title}</h3>
                        </div>
                        <div className="p-5">
                            <p className="text-xs font-mono text-violet-400/70 mb-2">{p.category}</p>
                            <p className="text-sm text-white/50 leading-relaxed mb-4">{p.description}</p>
                            <div className="flex items-center gap-1 text-xs text-white/30 group-hover:text-violet-400 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>View project</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
