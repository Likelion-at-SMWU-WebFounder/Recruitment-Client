import React, { useState } from "react";
import styled from "styled-components";
import { faqData } from "./data";

const FAQList = () => {
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Container>
      {faqData.map((faq, index) => (
        <Accordion key={index} isOpen={isOpen[index]}>
          <Question onClick={() => toggleAccordion(index)}>
            {faq.question}
            <ToggleIcon isOpen={isOpen[index]}>+</ToggleIcon>
          </Question>
          <AnswerContainer isOpen={isOpen[index]}>
            <Answer>{faq.answer}</Answer>
          </AnswerContainer>
        </Accordion>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Accordion = styled.div`
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  margin-bottom: -1px;
  overflow: hidden;
  transition: height 0.3s ease;
  height: ${({ isOpen }) => (isOpen ? "auto" : "80px")};
  padding: 7px;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "100%")};
    padding: 5px;
  }

  @media (max-width: 480px) {
    height: ${({ isOpen }) => (isOpen ? "auto" : "100%")};
    padding: 5px;
  }
`;

const Question = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 12px;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
    padding: 14px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 22px;
    padding: 7px;
  }
`;

const ToggleIcon = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
  font-size: 40px;
  color: #ffffff;
`;

const AnswerContainer = styled.div`
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  transition: height 0.3s ease;
`;

const Answer = styled.div`
  font-size: 20px;
  padding: 20px;
  line-height: 25px;
  font-weight: 300;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    padding: 10px;
  }
`;

export default FAQList;
