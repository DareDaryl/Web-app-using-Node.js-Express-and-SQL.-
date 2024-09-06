import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const categories = [     //set category ID's 
  { id: 1, name: 'Breaking Benjamin' },
  { id: 2, name: 'Journey' },
  { id: 3, name: 'Muse' },
  { id: 4, name: 'James Bay' },
  { id: 5, name: 'City and Colour' },
];

const initialQuestions = {   //Set up q's and answers by ID
  1: [
    { id: 1, text: 'When is their next tour?', date: '2024-01-01', answer: 'They will be playing Brick by Brick on October 16' },
    { id: 2, text: 'Are all the original members still in the band?', date: '2024-01-02', answer: 'Yes. They are one of the few bands that have never swapped out members' },
    { id: 3, text: 'Where can I buy tickets or merch?', date: '2024-01-03', answer: 'You can buy both at Darylstickettornado.com ' },
  ],
  2: [
    { id: 1, text: 'When is their next tour?', date: '2024-01-01', answer: 'Journey will be playing the civic center near you on November 9' },
    { id: 2, text: 'What is new with the band?', date: '2024-01-02', answer: 'Arnol Pineda has started a non-profit org that brings music accessiblity to underpriviledged areas' },
    { id: 3, text: 'Where can I buy tickets or merch?', date: '2024-01-03', answer: 'You can buy both at Darylstickettornado.com' },
  ],
  3: [
    { id: 1, text: 'When is their next tour?', date: '2024-01-01', answer: 'Muse has no tours scheduled for the rest of 2024' },
    { id: 2, text: 'Is it true that Matt Bellamy wrote a track for the new Deadpool movie?', date: '2024-01-02', answer: 'Yes, that is true. Though uncredited, Mat Bellamy wrote and composed a song for the features soundtrack' },
    { id: 3, text: 'Where can I buy tickets or merch?', date: '2024-01-03', answer: 'You can buy both at Darylstickettornado.com' },
  ],
  4: [
    { id: 1, text: 'When is their next tour?', date: '2024-01-01', answer: 'James Bay has plans to tour North America in 2025. Keep checking back here for updates!' },
    { id: 2, text: 'Who will be the opening act for James Bay?', date: '2024-01-02', answer: 'Hozier is slated to open for James Bay through the North America leg of their tour' },
    { id: 3, text: 'Where can I buy tickets or merch?', date: '2024-01-03', answer: 'You can buy both at Darylstickettornado.com' },
  ],
  5: [
    { id: 1, text: 'When is their next tour', date: '2024-01-01', answer: 'City and Colour will be touring the West Coast in the Fall of 2025' },
    { id: 2, text: 'Is it true the band kicked out their drummer?', date: '2024-01-02', answer: 'Whilst he was not kicked out, he did leave the band citing creative differences' },
    { id: 3, text: 'Where can I buy tickets or merch?', date: '2024-01-03', answer: 'You can buy both at Darylstickettornado.com' },
  ],
};


/*selectedQuestion: Stores the currently selected question.questions: Stores the list of questions, 
initialized with initialQuestions.newQuestion: Stores the text for a new question being added.   
newAnswer: Stores the answer text for a new question being added. */
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

  const handleQuestionClick = (question) => { /*It takes a question object as a parameter and 
    sets it as the selectedQuestion in the component's state using the setSelectedQuestion function.*/
    setSelectedQuestion(question);
  };

  const getCategoryQuestions = (categoryId) => { /*It takes a categoryId as a parameter and returns 
    the list of questions associated with that category from the questions state.If there are no 
    questions for the given categoryId, it returns an empty array ([]).*/ 
    return questions[categoryId] || [];
  };

  const handleAddQuestion = (event) => {    //Set up to add new q's. 
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
        <h1>Your five favorite bands</h1>
        <p>Welcome, Bladerunner</p>
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
