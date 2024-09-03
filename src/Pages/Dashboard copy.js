import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Mathematics' },
    { id: 5, name: 'Geography' },
  ];
  
  const questions = {
    1: [
      { id: 1, text: 'What is the latest version of React?', date: '2024-01-01', answer: 'The latest version of React is 18.2.0.' },
      { id: 2, text: 'What are the advantages of TypeScript over JavaScript?', date: '2024-01-02', answer: 'TypeScript offers static typing, which can catch errors at compile-time and improve code maintainability.' },
      { id: 3, text: 'How does a computer network work?', date: '2024-01-03', answer: 'A computer network works by connecting multiple devices through communication channels, allowing them to share resources and data.' },
    ],
    2: [
      { id: 1, text: 'What is the theory of relativity?', date: '2024-01-01', answer: 'The theory of relativity is a theory by Albert Einstein that includes both special relativity and general relativity, describing the relationship between space, time, and gravity.' },
      { id: 2, text: 'How do vaccines work?', date: '2024-01-02', answer: 'Vaccines work by stimulating the immune system to recognize and fight specific pathogens without causing the disease itself.' },
      { id: 3, text: 'What is the process of photosynthesis?', date: '2024-01-03', answer: 'Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water.' },
    ],
    3: [
      { id: 1, text: 'Who was the first President of the United States?', date: '2024-01-01', answer: 'George Washington was the first President of the United States.' },
      { id: 2, text: 'What caused the fall of the Roman Empire?', date: '2024-01-02', answer: 'The fall of the Roman Empire was due to a combination of internal decay and external invasions.' },
      { id: 3, text: 'When was the Declaration of Independence signed?', date: '2024-01-03', answer: 'The Declaration of Independence was signed on July 4, 1776.' },
    ],
    4: [
      { id: 1, text: 'What is the Pythagorean theorem?', date: '2024-01-01', answer: 'The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.' },
      { id: 2, text: 'How do you calculate the area of a circle?', date: '2024-01-02', answer: 'The area of a circle is calculated using the formula A = πr², where r is the radius of the circle.' },
      { id: 3, text: 'What is the difference between permutations and combinations?', date: '2024-01-03', answer: 'Permutations refer to the arrangement of items where order matters, while combinations refer to the selection of items where order does not matter.' },
    ],
    5: [
      { id: 1, text: 'What is the capital of Australia?', date: '2024-01-01', answer: 'The capital of Australia is Canberra.' },
      { id: 2, text: 'Which is the largest desert in the world?', date: '2024-01-02', answer: 'The largest desert in the world is the Antarctic Desert.' },
      { id: 3, text: 'What are the major rivers in Africa?', date: '2024-01-03', answer: 'The major rivers in Africa include the Nile, Congo, and Niger rivers.' },
    ],
  };
  
function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
    navigate('/login');
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getCategoryQuestions = (categoryId) => {
    return questions[categoryId] || [];
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>The Final Project</h1>
        <p>Welcome, Username</p>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="dashboard-content">
        <nav className="category-menu">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <button onClick={() => handleCategorySelect(category.id)}>
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="questions-section">
          <h2>Select a Category to view its questions</h2>
          {selectedCategory && (
            <ul>
              {getCategoryQuestions(selectedCategory)
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((question) => (
                  <li key={question.id}>{question.text}</li>
                ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;









/* src/Pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
        </div>
    );
};

export default Dashboard;*/
