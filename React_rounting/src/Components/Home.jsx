import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="relative text-indigo-900 rounded-lg sm:mx-16 mx-2 sm:py-16 pt-20 ">
            <div className="relative z-10 max-w-screen-xl px-4 pb-20 sm:py-24 mx-auto sm:px-6 lg:px-8">
                <div className="text-center sm:text-left sm:ml-auto max-w-xl sm:mt-1 mt-10 space-y-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">
                        Hello, I'm Mustafa Ansari
                        <span className="block text-xl sm:text-2xl text-gray-400">A Full-stack Developer & ML Enthusiast</span>
                    </h1>

                    <p className="text-lg text-gray-900">
                        I specialize in building scalable web applications and machine learning models. Passionate about Spring Boot, React, and delivering high-quality solutions.
                    </p>

                    <div className="space-x-4">
                        <Link
                            to="/github"
                            className="inline-flex text-white  items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:bg-orange-700"
                        >
                            View My GitHub
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-gray-700 rounded-lg hover:bg-gray-600"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 w-full h-full pt-12">
                <img
                    className="w-90 h-full object-cover opacity-50"
                    src="https://i.ibb.co/5BCcDYB/Remote2.png"
                    alt="Workspace"
                    
                />
            </div>
        </section>
    );
}
