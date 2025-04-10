import React, { useState } from "react";
const faqs = [
  {
    question: "How exactly will my donation be used?",
    answer: "Your donation funds school supplies, builds classrooms, trains teachers, and provides scholarships.",
  },
  {
    question: "Can I choose a specific project?",
    answer: "Yes! You can support specific education programs based on your preference.",
  },
  {
    question: "How can I be sure my donation is making an impact?",
    answer: "We provide regular impact reports and community success stories.",
  },
  {
    question: "How can I get involved beyond donating?",
    answer: "You can volunteer, advocate, or join fundraising events to support us.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, donations are tax-deductible under applicable laws.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about supporting education.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <h5>{faq.question}</h5>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
