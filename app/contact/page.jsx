"use client";
import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() { 
    return (
        <div className="min-h-screen">
            <div className="relative">
                <Navbar />
            </div>

            <main className="pt-24 px-25">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold">Contact</h1>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
                    {/* Left column with map and text */}
                    <div className="flex flex-col space-y-4">
                        {/* Google Maps embed */}
                        <div className="relative w-full h-[400px] overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1655254007331!5m2!1sen!2sin"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TravelUp Office Location"
                                className="rounded-md"
                            ></iframe>
                        </div>
                        
                        {/* Text paragraph positioned below the map */}
                        <div className="text-black s-font text-base font-normal leading-relaxed">
                            Donec accumsan purus nec ligula volutpat posuere. Integer lectus lorem, mollis eget varius condimentum, vehicula eu arcu. Duis viverra orci vel pretium eleifend. Phasellus sit amet pellentesque risus. Nulla ut ex sit amet nisl malesuada semper.
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <div>
                        <form className="flex flex-col gap-6 w-full">
                            <div className="grid s-font grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex s-font flex-col relative">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="border-b-2 border-black/30 bg-transparent focus:outline-none py-2 px-1 placeholder-gray-500 focus:placeholder-transparent"
                                        required
                                    />
                                    <label 
                                        htmlFor="name" 
                                        className="absolute left-1 -top-5 text-sm font-medium text-gray-700 opacity-0 transition-all duration-200 peer-focus:opacity-100"
                                    >
                                        Your Name
                                    </label>
                                </div>
                                <div className="flex  flex-col relative">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="border-b-2 border-black/30 bg-transparent focus:outline-none py-2 px-1 placeholder-gray-500 focus:placeholder-transparent"
                                        required
                                    />
                                    <label 
                                        htmlFor="email" 
                                        className="absolute left-1 -top-5 text-sm font-medium text-gray-700 opacity-0 transition-all duration-200 peer-focus:opacity-100"
                                    >
                                        Your Email
                                    </label>
                                </div>
                            </div>

                            <div className="flex s-font flex-col relative">
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Subject"
                                    className="border-b-2 border-black/30 bg-transparent focus:outline-none py-2 px-1 placeholder-gray-500 focus:placeholder-transparent"
                                    required
                                />
                                <label 
                                    htmlFor="subject" 
                                    className="absolute left-1 -top-5 text-sm font-medium text-gray-700 opacity-0 transition-all duration-200 peer-focus:opacity-100"
                                >
                                    Subject
                                </label>
                            </div>

                            <div className="flex s-font flex-col relative">
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    className="border-b-2 border-black/30 bg-transparent focus:outline-none py-2 px-1 resize-none placeholder-gray-500 focus:placeholder-transparent"
                                    required
                                ></textarea>
                                <label 
                                    htmlFor="message" 
                                    className="absolute left-1 -top-5 text-sm font-medium text-gray-700 opacity-0 transition-all duration-200 peer-focus:opacity-100"
                                >
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="self-start w-40 h-14 bg-black text-white font-semibold text-base hover:bg-gray-800 transition flex items-center justify-center mt-4"
                            >
                                Send
                            </button>
                        </form>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}
