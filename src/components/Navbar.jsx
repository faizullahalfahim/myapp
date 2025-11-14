import React from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', name: 'Home', icon: '🏠' },
        { path: '/apps', name: 'Apps', icon: '📱' },
        { path: '/my-installation', name: 'Installation', icon: '⬇️' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="shadow-md sticky top-0 z-50 bg-base-100/90 backdrop-blur transition-all duration-300">
            <nav className="navbar container mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="navbar-start">
                    
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <span className="text-xl">☰</span>
                        </div>
                        <ul 
                            tabIndex={0} 
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                        >
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        className={isActive(link.path) ? 'active font-bold text-primary' : 'text-base-content'}
                                    >
                                        <span className="mr-2 text-lg">{link.icon}</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost text-xl font-extrabold text-primary">
                        <span className="text-2xl mr-2">⚡️</span>
                        <span className="hidden sm:inline-block">Hero IO</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link 
                                    to={link.path} 
                                    className={isActive(link.path) ? 'font-bold text-primary bg-base-300' : 'btn btn-ghost'}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a 
                        href="YOUR_GITHUB_PROFILE_URL" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm sm:btn-md transition-transform transform hover:scale-105"
                    >
                        <span className="text-lg mr-2">🔗</span>
                        <span className="hidden sm:inline-block">Contribution</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;