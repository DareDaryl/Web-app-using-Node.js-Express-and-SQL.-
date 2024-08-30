import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Forum() {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/questions')
            .then(response => setQuestions(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/questions', { content: newQuestion }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setNewQuestion('');
            window.location.reload();
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleQuestionSubmit}>
                <textarea value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} required></textarea>
                <button type="submit">Post Question</button>
            </form>
            <ul>
                {questions.map(question => (
                    <li key={question.id}>{question.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Forum;
