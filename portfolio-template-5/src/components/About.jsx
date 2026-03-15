import { Zap, Brain, Layers, GitMerge } from "lucide-react"

const stats = [
    { num: "20+", label: "MVPs Launched" },
    { num: "4–6wk", label: "Avg. Time to Launch" },
    { num: "15+", label: "Startup Clients" },
    { num: "100%", label: "Production-Ready" },
]

const skills = [
    "React", "TypeScript", "Express", "Next.js",
    "Node.js", "Vercel", "Git", "Github",
    "Docker", "AWS", "MongoDB", "PostgreSQL", "Figma",
]

const services = [
    {
        icon: Zap,
        title: "Rapid MVP Development",
        desc: "Full-stack web apps scoped, designed, and shipped to production in 4–6 weeks. No bloat, no overengineering — just the core that gets you to users fast.",
    },
    {
        icon: Brain,
        title: "Custom AI Integration",
        desc: "OpenAI, Anthropic, Gemini, RAG pipelines, vector search, fine-tuning. AI woven into your product's core, not bolted on as an afterthought.",
    },
    {
        icon: Layers,
        title: "SaaS Architecture",
        desc: "Multi-tenant systems, Stripe billing, auth, role-based access, dashboards. The full stack a SaaS needs — built to grow from day one.",
    },
    {
        icon: GitMerge,
        title: "Technical Co-founder Support",
        desc: "Act as your technical lead. API design, stack decisions, hiring briefs, and code review — I help you build the right thing, the right way.",
    },
]

export const About = () => {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-zinc-100">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {stats.map((s, i) => (
                    <div key={i} className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6 text-center">
                        <div className="text-4xl font-bold text-zinc-900 mb-1">{s.num}</div>
                        <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Bio + Services */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-4">About</p>
                    <h2 className="text-3xl font-bold leading-tight mb-6 text-zinc-900">
                        I help startups go from idea to live product — fast.
                    </h2>
                    <p className="text-zinc-500 leading-relaxed mb-4">
                        I'm Naveen, a full stack developer who works exclusively with early-stage founders. My focus is on speed without sacrificing quality — production-grade code, clean architecture, and AI built in from the start.
                    </p>
                    <p className="text-zinc-500 leading-relaxed mb-8">
                        I've launched SaaS dashboards, AI-powered tools, e-commerce platforms, and developer APIs. If you have a validated idea and need to ship, I'm the person to call.
                    </p>

                    {/* Skills */}
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((s, i) => (
                            <span key={i}
                                className="px-3 py-1.5 rounded-lg border border-zinc-200 text-xs text-zinc-600 font-medium hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-default">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    {services.map(({ icon: Icon, title, desc }, i) => (
                        <div key={i} className="group flex gap-5 p-5 rounded-xl border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                            <div className="w-9 h-9 rounded-lg bg-zinc-100 group-hover:bg-emerald-100 flex items-center justify-center shrink-0 transition-colors">
                                <Icon className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-zinc-800 mb-1">{title}</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
