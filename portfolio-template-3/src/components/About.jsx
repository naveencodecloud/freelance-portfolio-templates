const services = [
    { title: "Brand Identity", desc: "Logos, visual systems, brand guidelines" },
    { title: "UI/UX Design", desc: "User interfaces, prototypes, design systems" },
    { title: "Web Design", desc: "Landing pages, portfolios, digital experiences" },
    { title: "Art Direction", desc: "Campaign visuals, editorial, photography direction" },
]

export const About = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] mb-6 bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">About</p>
                    <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-[#0e0e0e] dark:text-[#f5f5f5]">
                        Design that<br />moves people
                    </h2>
                    <p className="text-[#0d0d0d]/75 dark:text-[#f5f5f5]/60 text-lg leading-relaxed">
                        I'm a creative designer with 7 years of experience working with agencies, startups, and global brands. My work lives at the intersection of aesthetics and function.
                    </p>
                </div>
                <div className="space-y-0">
                    {services.map((s, i) => (
                        <div key={i} className="group border-b border-[#0d0d0d]/15 dark:border-[#f5f5f5]/10 py-6 flex justify-between items-center hover:border-purple-500/50 transition-colors cursor-default">
                            <div>
                                <h3 className="font-bold text-lg mb-1 text-[#0e0e0e] dark:text-[#f5f5f5]">{s.title}</h3>
                                <p className="text-sm text-[#0d0d0d]/65 dark:text-[#f5f5f5]/50">{s.desc}</p>
                            </div>
                            <span className="text-3xl font-black text-[#0d0d0d]/15 dark:text-[#f5f5f5]/10 group-hover:text-purple-500/30 transition-colors">0{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
