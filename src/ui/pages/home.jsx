import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="w-full bg-blue-600 text-white py-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-3xl font-bold">Electron JS App</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="hover:underline">Features</a></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-6 text-center">
                <section className="py-20">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Electron JS App</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Build cross-platform desktop applications with ease using Electron and modern web technologies.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </section>

                <section id="features" className="py-20 bg-white">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Cross-Platform</h4>
                            <p className="text-gray-600">Run your app on Windows, macOS, and Linux seamlessly.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Modern UI</h4>
                            <p className="text-gray-600">Design beautiful interfaces with Tailwind CSS.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold mb-2">Easy Integration</h4>
                            <p className="text-gray-600">Integrate with popular libraries and frameworks effortlessly.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Electron JS App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;