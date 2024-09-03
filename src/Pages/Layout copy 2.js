import React from 'react';
import { Outlet } from 'react-router-dom'; // This will render the nested routes
import './Layout.css'; // Import CSS for styling

const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                <h1>My Website</h1>
                {/* Add navigation links or other header content here */}
            </header>
            <main className="main-content">
                <Outlet /> {/* Renders the child routes */}
            </main>
            <footer className="footer">
                <p>&copy; 2024 My Website</p>
                {/* Add footer content here */}
            </footer>
        </div>
    );
};

export default Layout;
