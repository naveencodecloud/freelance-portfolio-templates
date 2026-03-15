import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "Project #1",
        description: "Custom AI Web Application Development - Fullstack development, OpenAI API Integration",
        image: "/projects/project1.png",
        link: "#",
    },
    {
        title: "Project #2",
        description: "Ecommerce Development — Headless Shopify, Webflow, Fabric.js",
        image: "/projects/project2.png",
        link: "#",
    },
    {
        title: "Project #3",
        description: "MVP Development - Fullstack development, Hugging Face Integration",
        image: "/projects/project3.png",
        link: "#",
    },
    {
        title: "Project #4",
        description: "AI Plant Care App Development - React Native Development",
        image: "/projects/project4.png",
        link: "#",
    },
]

export const Projects = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl xl:max-w-384 mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((item, idx) => (
                        <div key={idx} className="group rounded-2xl overflow-hidden bg-gray-200 text-muted">
                            <a href={item.link} target={item.link === "#" ? "" : "_blank"} className="no-underline">
                                <div className="relative overflow-hidden aspect-video">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform! duration-500! group-hover:scale-110" />
                                </div>
                                <div className="p-4 md:p-6 space-y-1 md:space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg md:text-xl font-semibold group-hover:underline">{item.title}</h3>
                                        <ArrowRight className="w-5 h-5 text-muted-foreground -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <p className="text-sm sm:text-base pr-8">{item.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
