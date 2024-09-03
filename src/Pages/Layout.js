// src/Pages/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Use Link for client-side navigation
import './Layout.css'; // Import CSS for styling

const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="logo">
                    <h1>My Project 4</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Outlet /> {/* Renders the child routes */}
            </main>
            <footer className="footer">
                <p>&copy; 2024 Project 4.  Designed and developed by 
                  <a href="https://www.github.com/DareDaryl" 
                  target="_blank" 
                  rel="noopener noreferrer">         Daryl Shifflett</a>.</p>
            </footer>
        </div>
    );
};

export default Layout;
