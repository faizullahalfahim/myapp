import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-16 border-t border-base-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <Link to="/" className="text-3xl font-extrabold text-primary flex items-center">
                            <span className="text-4xl mr-2">⚡️</span>
                            Hero IO
                        </Link>
                        <p className="mt-4 text-sm opacity-80 leading-relaxed">
                            Discover apps, track installations, explore insights, and manage your digital ecosystem with Hero IO.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-primary transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/apps" className="hover:text-primary transition">Apps</Link>
                            </li>
                            <li>
                                <Link to="/my-installation" className="hover:text-primary transition">Installation</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-primary">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="YOUR_GITHUB_PROFILE_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    className="hover:text-primary transition"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:yourmail@example.com"
                                    className="hover:text-primary transition"
                                >
                                    Email Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-base-300 text-center">
                    <p className="text-sm opacity-70">
                        © {new Date().getFullYear()} Hero IO — All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;