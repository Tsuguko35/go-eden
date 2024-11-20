import React, { useEffect, useState } from "react";
import "../../styles/faq.css";
import { IoRemove, IoAdd } from "react-icons/io5";
import { faqs_questions } from "../../utils";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState("");
  const midpoint = Math.ceil(faqs_questions.length / 2);

  const openFaq = (faqNumber) => {
    if (faqNumber === activeQuestion) {
      setActiveQuestion(0);
    } else {
      setActiveQuestion(faqNumber);
    }
  };
  return (
    <div id="faq" className="faq reveal">
      <p className="title">Frequently Asked Questions</p>
      <div className="faq-flex">
        <div className="faq-group">
          {faqs_questions.slice(0, midpoint).map((faq, index) => {
            return (
              <div
                key={`firsthalf-${index}`}
                className={`grid-item ${
                  activeQuestion === `firsthalf-${index}` ? "active" : ""
                }`}
                onClick={() => openFaq(`firsthalf-${index}`)}
              >
                <div className="title">
                  <p>{faq.question}</p>
                  <div className="icon">
                    {activeQuestion === `firsthalf-${index}` ? (
                      <IoRemove />
                    ) : (
                      <IoAdd />
                    )}
                  </div>
                </div>

                <div className="explanation">{faq.answer}</div>
              </div>
            );
          })}
        </div>
        <div className="faq-group">
          {faqs_questions
            .slice(midpoint)
            .slice(0, midpoint)
            .map((faq, index) => {
              return (
                <div
                  key={`secondhalf-${index}`}
                  className={`grid-item ${
                    activeQuestion === `secondhalf-${index}` ? "active" : ""
                  }`}
                  onClick={() => openFaq(`secondhalf-${index}`)}
                >
                  <div className="title">
                    <p>{faq.question}</p>
                    <div className="icon">
                      {activeQuestion === `secondhalf-${index}` ? (
                        <IoRemove />
                      ) : (
                        <IoAdd />
                      )}
                    </div>
                  </div>
                  <div className="explanation">{faq.answer}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
