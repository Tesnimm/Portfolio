import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all ">
                        <h3 className="text-xl font-bold mb--2 ">Emotion Analysis from Albanian Speech Data</h3>
                        <p className="text-gray-400 mb-4">
                            This research investigates the application of Deep Learning techniques
                            for analyzing and classifying emotions from Albanian speech data.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Xception", "ResNet50", "Librosa", "Deep Learning", "Google Colab"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Tesnimm/Emotion-Analysis-from-Albanian-Speech-Data" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all ">
                        <h3 className="text-xl font-bold mb--2 ">University Information Management System</h3>
                        <p className="text-gray-400 mb-4">
                            This project was developed as part of the Object-Oriented Analysis and Design (NDAT) course in our Computer Engineering curriculum.
                            The main goal was to design and implement a basic Information Management System for a university using the principles of object-oriented
                            programming (OOP).
                        </p>
                        <div>
                            {["C#", ".NET", "VS Code", "Local Data Storage"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Tesnimm/NDAT" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all ">
                        <h3 className="text-xl font-bold mb--2 ">FOOD ORDER</h3>
                        <p className="text-gray-400 mb-4">
                            Developed a dynamic food ordering platform using PHP, enabling seamless management of menu items, orders, and user data.
                            Implemented full CRUD functionality for the admin panel to ensure efficient content and order management.
                        </p>
                        <div>
                            {["PHP", "CRUDOperations", "ProjectShowCase"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Tesnimm/FOOD-ORDER-2" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all ">
                        <h3 className="text-xl font-bold mb--2 ">FRONT END</h3>
                        <p className="text-gray-400 mb-4">
                            Developed engaging and responsive frontend interfaces including a flower shop, interactive cards,
                            and a dynamic portfolio with animated effects to enhance user experience and showcase creativity.
                        </p>
                        <div>
                            {["Creative Design", "Interactive Card", "Typewriter", "Portfolio", "Flower Shop"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Tesnimm/Front-End" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}