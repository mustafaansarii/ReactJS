import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        // Handle form submission logic here (e.g., API request)
    };

    return (
        <section className="py-20 bg-gray-100 text-black">
            <div className="max-w-screen-xl px-4 sm:px-6 mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                    Contact Me
                </h2>

                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    I would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            rows="6"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
