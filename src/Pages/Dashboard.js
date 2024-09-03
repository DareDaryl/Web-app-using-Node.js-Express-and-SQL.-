import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const categories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'History' },
  { id: 4, name: 'Mathematics' },
  { id: 5, name: 'Geography' },
];

const initialQuestions = {
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
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedQuestion(null); // Clear selected question when changing category
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const getCategoryQuestions = (categoryId) => {
    return questions[categoryId] || [];
  };

  const handleAddQuestion = (event) => {
    event.preventDefault();
    if (selectedCategory && newQuestion && newAnswer) {
      const newQuestionId = Math.max(...Object.values(questions[selectedCategory]).map(q => q.id), 0) + 1;
      const newQuestionData = {
        id: newQuestionId,
        text: newQuestion,
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        answer: newAnswer,
      };

      setQuestions(prevQuestions => ({
        ...prevQuestions,
        [selectedCategory]: [...prevQuestions[selectedCategory], newQuestionData],
      }));

      // Clear the form fields
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  const handleDeleteQuestion = (questionId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this question?');
    if (confirmDelete && selectedCategory) {
      setQuestions(prevQuestions => ({
        ...prevQuestions,
        [selectedCategory]: prevQuestions[selectedCategory].filter(q => q.id !== questionId),
      }));
      if (selectedQuestion && selectedQuestion.id === questionId) {
        setSelectedQuestion(null);
      }
    }
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
          {selectedCategory ? (
            <>
              <h2>Questions in {categories.find(cat => cat.id === selectedCategory)?.name}</h2>
              {selectedQuestion ? (
                <div className="answer-container">
                  <h3>{selectedQuestion.text}</h3>
                  <p>{selectedQuestion.answer}</p>
                  <button onClick={() => setSelectedQuestion(null)}>Back to Questions</button>
                  <button 
                    onClick={() => handleDeleteQuestion(selectedQuestion.id)} 
                    className="delete-button">
                    Delete Question
                  </button>
                </div>
              ) : (
                <>
                  <ul>
                    {getCategoryQuestions(selectedCategory)
                      .sort((a, b) => new Date(a.date) - new Date(b.date))
                      .map((question) => (
                        <li key={question.id}>
                          <button onClick={() => handleQuestionClick(question)}>
                            {question.text}
                          </button>
                          <button 
                            onClick={() => handleDeleteQuestion(question.id)} 
                            className="delete-button">
                            Delete
                          </button>
                        </li>
                      ))}
                  </ul>
                  <form onSubmit={handleAddQuestion} className="add-question-form">
                    <h3>Add a New Question</h3>
                    <textarea
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      placeholder="Enter your question"
                      rows="3"
                      required
                    />
                    <textarea
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      placeholder="Enter the answer"
                      rows="3"
                      required
                    />
                    <button type="submit">Add Question</button>
                  </form>
                </>
              )}
            </>
          ) : (
            <p>Select a category to view its questions.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
