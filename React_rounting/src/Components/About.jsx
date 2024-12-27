import React from 'react';

export default function About() {
    return (
        <section className="py-20 bg-gray-100 text-black">
            <div className="max-w-screen-xl px-4 sm:px-6 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                    About Me
                </h2>

                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    Hi, I'm Mustafa Ansari. I'm a passionate Full-stack Developer and Machine Learning enthusiast.
                    I specialize in building scalable and efficient web applications using modern technologies like Spring Boot, React, and Node.js.
                    I am constantly learning and experimenting with new tools to improve my skills and create innovative solutions.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills & Expertise</h3>
                <ul className="list-disc text-left mx-auto space-y-2 text-gray-600 max-w-xl">
                    <li>Full-stack Web Development (React, Spring Boot, Node.js)</li>
                    <li>Machine Learning & Data Science (TensorFlow, Scikit-learn)</li>
                    <li>API Development & Integration (RESTful APIs, GraphQL)</li>
                    <li>Database Management (MongoDB, MySQL, PostgreSQL)</li>
                    <li>Cloud Computing & DevOps (AWS, Docker)</li>
                </ul>

                <div className="mt-10">
                    <a
                        href="mailto:mustafaansari@example.com"
                        className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
