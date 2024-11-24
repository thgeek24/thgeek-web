import React, {useState, useEffect} from 'react';
import {Github, Linkedin, Mail, Globe, Code, Terminal, Wrench} from 'lucide-react';

const ProfilePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('skills');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const personalInfo = {
        name: "Tao Hong",
        title: "Java/Full Stack Engineer",
        specialization: "Java & Web Technologies",
        bio: "Passionate Java/Full Stack Developer with expertise in Java backend development and modern web technologies. Focused on building scalable, efficient applications with clean code practices.",
    };

    const skills = {
        backend: ["Java", "Spring Boot", "Spring Cloud", "Hibernate", "MySQL", "MongoDB", "Golang"],
        frontend: ["React", "JavaScript", "HTML5", "CSS3"],
        tools: ["Git", "Docker", "Jenkins", "AWS", "Maven"]
    };

    const experience = [
        {
            company: "Tech Solutions Inc",
            position: "Senior Full Stack Engineer",
            period: "2020 - Present",
            description: "Leading development of enterprise applications using Java/Spring Boot and React"
        },
        {
            company: "Digital Innovations Co",
            position: "Java Developer",
            period: "2018 - 2020",
            description: "Developed and maintained Java-based backend services"
        }
    ];

    const fadeInClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

    return (
        <div
            className={`min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-8 transition-all duration-1000 ${fadeInClass}`}>
            <div className="max-w-4xl mx-auto px-4">
                {/* Profile Card */}
                <div
                    className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border-t-4 border-blue-500 transform hover:scale-[1.01] transition-transform duration-300">
                    {/* Profile Header */}
                    <div
                        className="relative bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 animate-pulse"/>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <h1 className="text-4xl font-bold tracking-tight">{personalInfo.name}</h1>
                                    <p className="text-2xl font-light text-blue-200">{personalInfo.title}</p>
                                    <p className="text-blue-300">{personalInfo.specialization}</p>
                                </div>
                                <div className="flex space-x-4">
                                    {[Github, Linkedin, Mail, Globe].map((Icon, index) => (
                                        <div key={index} className="group relative">
                                            <Icon
                                                className="w-6 h-6 cursor-pointer transform transition-all duration-300 hover:scale-110 text-blue-200 hover:text-white"
                                            />
                                            <div
                                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {Icon.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-3xl">{personalInfo.bio}</p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="p-8 bg-gray-800">
                        <h2 className="text-2xl font-bold text-blue-100 mb-6 flex items-center">
                            <Code className="mr-2"/>
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div
                                    key={category}
                                    className="transform hover:scale-105 transition-all duration-300"
                                >
                                    <h3 className="text-lg font-semibold text-blue-200 mb-3 flex items-center">
                                        {category === 'backend' && <Terminal className="w-5 h-5 mr-2"/>}
                                        {category === 'frontend' && <Code className="w-5 h-5 mr-2"/>}
                                        {category === 'tools' && <Wrench className="w-5 h-5 mr-2"/>}
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </h3>
                                    <div className="space-y-2">
                                        {skillList.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`
                          inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2
                          transform hover:scale-105 transition-all duration-300
                          ${category === 'backend' ? 'bg-blue-900 text-blue-100 hover:bg-blue-800' : ''}
                          ${category === 'frontend' ? 'bg-indigo-900 text-indigo-100 hover:bg-indigo-800' : ''}
                          ${category === 'tools' ? 'bg-purple-900 text-purple-100 hover:bg-purple-800' : ''}
                        `}
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="p-8 bg-gray-900">
                        <h2 className="text-2xl font-bold text-blue-100 mb-6">Professional Experience</h2>
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500 transform hover:scale-[1.02] transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold text-blue-100">{exp.position}</h3>
                                            <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                                    </div>
                                    <p className="mt-3 text-gray-300 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;