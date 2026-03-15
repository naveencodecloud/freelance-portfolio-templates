import { ArrowRight, Code2, Layers, Zap } from "lucide-react"

const skills = ["React", "TypeScript", "Express", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS", "Next.js", "GraphQL", "Redis", "Python", "Tailwind CSS", "Vercel", "Git", "Github"]

export const Hero = () => {
    return (
        <>
            {/* Glass Nav */}
            <nav className="w-full max-w-6xl mx-auto px-6 py-5">
                <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
                    <span className="font-bold text-white">naveen.dev</span>
                    <div className="flex items-center gap-4">
                        {["Work", "About"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors no-underline hover:no-underline">{item}</a>
                        ))}
                        <a href="mailto:hello@naveen.studio" className="text-sm px-4 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors no-underline hover:no-underline">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 animate-fade-in">
                <div className="text-center">
                    {/* Floating badges */}
                    <div className="flex justify-center gap-3 mb-10 flex-wrap">
                        {[{ icon: Code2, label: "Clean Code" }, { icon: Layers, label: "Scalable" }, { icon: Zap, label: "Fast Delivery" }].map(({ icon: Icon, label }, i) => (
                            <div key={i} className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white/70">
                                <Icon className="w-3.5 h-3.5 text-violet-400" />
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Avatar */}
                    <div className="mx-auto mb-8 relative w-24 h-24">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 glow flex items-center justify-center text-3xl font-bold text-white">N</div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        <span className="text-white">Full Stack Web</span><br />
                        <span className="text-gradient">Developer</span>
                    </h1>
                    <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
                        I build stunning, performant interfaces that users love. Specialized in building MVP, and modern AI web applications.
                    </p>

                    {/* Skill pills */}
                    <div className="flex justify-center gap-2 flex-wrap mb-10">
                        {skills.map((s, i) => (
                            <span key={i} className="glass px-3 py-1 rounded-full text-sm text-white/70">{s}</span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="mailto:hello@naveen.studio" className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-violet-600 to-violet-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity no-underline hover:no-underline glow">
                            Let's build together <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
