import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send data to backend here
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        We'd love to hear from you! Whether you have a question about our products, shipping, returns, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Contact Information */}
                    <div className="lg:col-span-1 border-r border-transparent lg:border-gray-200 lg:pr-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <FiMapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Office</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        123 Commerce Blvd, Suite 456<br />
                                        New York, NY 10001<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <FiPhone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Phone</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        +1 (555) 123-4567
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Mon-Fri from 8am to 5pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                                        <FiMail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        support@ecommerce.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                            {isSubmitted && (
                                <div className="mb-8 bg-green-50 border border-green-200 rounded-md p-4 flex items-center text-green-700">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Thank you! Your message has been sent. We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md border"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md border"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md border"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-black focus:border-black border-gray-300 rounded-md border resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-lg shadow-black/20"
                                    >
                                        Send Message <FiSend className="ml-2" />
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
