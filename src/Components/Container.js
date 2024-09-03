import React from 'react';
import './Container.css'; // Import CSS for styling

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;
