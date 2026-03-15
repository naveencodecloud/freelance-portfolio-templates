import { Code2, Zap, Network, Layers } from "lucide-react"

const services = [
    { title: "UI Engineering", desc: "Pixel-perfect React components with TypeScript", icon: Code2 },
    { title: "Performance", desc: "Core Web Vitals optimization & lazy loading", icon: Zap },
    { title: "API Integration", desc: "REST, GraphQL, WebSockets & real-time data", icon: Network },
    { title: "Design Systems", desc: "Scalable component libraries & Storybook", icon: Layers },
]

export const About = () => {
    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="glass glass-hover rounded-3xl p-8">
                    <p className="text-violet-400 text-xs uppercase tracking-widest mb-4 font-semibold">About Me</p>
                    <h2 className="text-3xl font-bold text-white mb-5 leading-snug">
                        Code is my craft,<br />performance is my obsession
                    </h2>
                    <p className="text-white/50 leading-relaxed text-sm mb-4">
                        I'm Naveen, a frontend engineer who cares deeply about the quality of the user experience. 5+ years shipping production apps used by thousands daily.
                    </p>
                    <p className="text-white/50 leading-relaxed text-sm">
                        From tiny startups to Series B companies — I've seen what separates good products from great ones.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {services.map(({ title, desc, icon: Icon }, i) => (
                        <div key={i} className="glass glass-hover rounded-2xl p-6">
                            <Icon className="w-5 h-5 text-violet-400 mb-3" />
                            <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
