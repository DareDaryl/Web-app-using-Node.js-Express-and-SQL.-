// src/Pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Home.css'; // Import the CSS file for styling


const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleExploreClick = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1></h1>
                <p>Welcome music lover. Sit back and let us plan your next show/concert! </p>
                <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
            </header>
            <section className="home-content">
                <div className="card">
                    <h2>Discover New Tracks</h2>
                    <p>Browse through a curated list of tracks and albums tailored just for you.</p>
                </div>
                <div className="card">
                    <h2>Find upcoming tour dates</h2>
                    <p>Plan your next show using our top 5 list</p>
                </div>
                <div className="card">
                    <h2>Real time band updates</h2>
                    <p>Get the most recent tour, band and member updates available</p>
                </div>
            </section>
        </div>
    );
}

export default Home;



/* src/Pages/Home.js
import React from 'react';

const Home = () => {
    return <h1>Dancing in the dark</h1>;
}

export default Home;*/
