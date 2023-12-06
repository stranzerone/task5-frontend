import React, { useState } from 'react';
import './FAQ.css'; // Import your CSS file for styling

const FAQ = () => {
  const faqData = [
    { question: 'What are the payment options available?', answer: 'Answer goes here.' },
    { question: 'Do we serve all over India?', answer: 'Answer goes here.' },
    { question: 'What are the walk-in options available?', answer: 'Answer goes here.' },
    { question: 'Are online consultations available?', answer: 'Answer goes here.' },
    { question: 'How long will my appointment take?', answer: 'Answer goes here.' },
    { question: 'Is any referral required for appointments?', answer: 'Answer goes here.' },
    { question: 'How can I book an appointment?', answer: 'Answer goes here.' },
    { question: 'Do I need to bring anything at my first appointment?', answer: 'Answer goes here.' },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div >
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question-box">
            {item.question}
            <button onClick={() => handleToggleAnswer(index)}>Answer</button>
          </div>
          {expandedIndex === index && <div className="answer-box">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
