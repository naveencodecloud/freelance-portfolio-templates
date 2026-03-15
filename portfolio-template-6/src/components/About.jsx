const skills = [
    "Web Design", "UX/UI", "Figma", "Framer",
    "Webflow", "Branding", "Typography", "HTML/CSS",
    "React", "Motion", "Print", "Strategy",
]

const stats = [
    { num: "7+", label: "Years" },
    { num: "60+", label: "Projects" },
    { num: "40+", label: "Clients" },
    { num: "12", label: "Awards" },
]

const services = [
    { title: "Web Design", desc: "Landing pages, portfolios, and full product sites" },
    { title: "Brand Identity", desc: "Logos, systems, and visual language from scratch" },
    { title: "UI Design", desc: "Interfaces that are intuitive and delightful to use" },
    { title: "Art Direction", desc: "Campaign concepts, visuals, and creative strategy" },
]

export const About = () => {
    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-8">

            {/* Stats */}
            <div className="grid grid-cols-4 border-b border-neutral-200">
                {stats.map((s, i) => (
                    <div key={i} className={`py-12 text-center ${i < stats.length - 1 ? 'border-r border-neutral-200' : ''}`}>
                        <div className="text-4xl md:text-5xl font-black mb-2 text-neutral-900">{s.num}</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Bio + Services */}
            <div className="grid lg:grid-cols-2 border-b border-neutral-200">
                <div className="lg:border-r border-neutral-200 py-12 pr-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-neutral-400">About</p>
                    <h2 className="text-3xl font-black leading-tight mb-6 text-neutral-900">
                        Design is a tool.<br />I know how to use it.
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                        I'm Naveen — a designer who believes every decision should serve a purpose. No decoration for its own sake. Just honest, effective work.
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                        I've worked with startups, agencies, and established brands to build things that look sharp and function sharper.
                    </p>

                    {/* Skills grid */}
                    <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-4 gap-1">
                        {skills.map((s, i) => (
                            <div key={i} className="text-[10px] font-bold uppercase tracking-wide text-neutral-400 hover:text-neutral-900 hover:bg-[#ffe600] px-1.5 py-1.5 transition-colors cursor-default">
                                {s}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div className="py-12 pl-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-neutral-400">Services</p>
                    <div className="space-y-1">
                        {services.map((s, i) => (
                            <div key={i} className="group flex items-start gap-5 py-5 border-b border-neutral-100 last:border-b-0 hover:border-neutral-300 transition-colors cursor-default">
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-wide mb-1 text-neutral-800 group-hover:text-neutral-900 transition-colors">{s.title}</h3>
                                    <p className="text-xs text-neutral-400">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
