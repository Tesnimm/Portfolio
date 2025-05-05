import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "React"
    ]

    const backendSkills = [
        "Python",
        "PHP",
        "Java",
        "MySQL",
        "SQLite",
        "Git",
        "Docker",
        "Postman"
    ]

    const librariesSkills = [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ]

    const AISkills = [
        "Machine Learning",
        "Deep Learning",
        "Data Mining",
        "Data Analysis",
        "NLP",
        "LLM",
        "Keras API",
        "CNN",
        "RNN"

    ]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a passionate and detail-oriented computer engineering student with a strong interest in innovative technologies and
                        software development. I enjoy turning ideas into functional solutions through continuous learning and hands-on experience.
                    </p>

                    <div className="grid grid-cols-1md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Python Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {librariesSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">AI</h3>
                            <div className="flex flex-wrap gap-2">
                                {AISkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S in Computer Engineering</strong> - Çanakkale Onsekiz Mart University
                            </li>
                            <li>
                                Relevant Coursework:OOP,AI,Cloud Computing,Agile Sostware Development...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">PRESIDENT OF BALKAN STUDENTS IN ÇANAKKALE(2021-2024) </h4>
                                <p>Effectively managed administrative tasks, organized culturally engaging events,
                                    and resolved member issues to support a positive and inclusive environment.
                                    Strengthened leadership, communication, and organizational skills while representing
                                    the association within the university and broader community.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">INTERN AT TEKNOPARK ISTANBUL CEKIRDEK AR-GE(2022) </h4>
                                <p>Gained hands-on experience with Arduino, contributing to hardware prototyping
                                    and system design.Utilized Python for image processing tasks, including data analysis
                                    and automation.Collaborated with a team to develop and test projects, enhancing technical and analytical skills.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">INTERN AT TEKNOPARK ISTANBUL CUBE INCUBATION (2023) </h4>
                                <p>Worked closely with the director team, gaining insights into the management and
                                    operation of a leading incubation center.Assisted in coordinating and supporting
                                    incubation programs, fostering innovation and entrepreneurship.Participated in strategic
                                    planning and organizational activities to enhance the incubation ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}