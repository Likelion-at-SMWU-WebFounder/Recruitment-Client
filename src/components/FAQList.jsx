import React, { useState } from 'react';
import styled from 'styled-components';

const FAQList = () => {
  const faqData = [
    {
      question: 'Q. 꼭 컴퓨터 관련 전공이어야만 하나요? 기초가 갖추어지지 않은 비전공자의 경우에는 지원이 힘든가요?',
      answer: '멋쟁이사자처럼은 비전공자와 전공자 모두를 대상으로 모집합니다. 기초를 갖춘 상태에서 동아리에 가입한 사람들도 있는 한편, 동아리 가입 후 코딩을 아예 처음 시작한 사람들도 있습니다. 코딩 경험이 없으시더라도 웹 서비스 또는 IT 관련 창업에 관심이 많으시고, 자기소개서와 면접을 통해 활동 의지와 열정을 충분히 보여주신다면 누구든지 활동 가능합니다.',
    },
    {
        question: 'Q. 전체, 파트 별 모집 인원이 궁금해요!',
        answer: '올해 전체 모집 인원은 대략 16~20명 내외 모집 예정이며, 파트 별 모집 인원은 기획/디자인 : 프론트엔드 : 백엔드 비율을 1:2:2로 예상하고 있습니다. 상황에 따라 변동이 있을 수 있습니다.',
      },
      {
        question: 'Q. 고학년, 저학년 비율이 궁금해요!',
        answer: '작년 11기 기준으로는 2~4학년에 걸쳐 다양했습니다.',
      },
     {
      question: 'Q. 면접에서 코딩 테스트를 보나요?',
      answer: '별도의 코딩 테스트는 보지 않습니다. 저희 동아리에서는 웹 개발 기초부터 차근차근 함께 학습합니다.',
    },     
    {
        question: 'Q. 정기 세션은 대면으로 진행하나요?',
        answer: '정기 세션은 매주 화요일 19시~21시에 대면을 원칙으로 진행하며, 동아리 기본 활동 시간이므로 모두 필참입니다.',
      },      
      {
        question: 'Q. 2학기에도 신입 아기 사자를 모집하나요?',
        answer: '멋쟁이사자처럼 활동은 1년을 기준으로 하며, 상반기 + 하반기 연속으로 활동하셔야 합니다. 매년 2월 말 ~ 3월 초에만 신입 아기 사자를 모집하고 있습니다.',
      },
     {
      question: 'Q. 시험 기간에도 정기 세션이 열리나요?',
      answer: '시험 기간에는 정기 세션을 잠시 멈췄다가, 시험 기간 이후 다시 진행합니다. 따라서 학기 중에도 부담 없이 활동하실 수 있습니다.',
    },     
    {
        question: 'Q. 수료 조건이 어떻게 되나요?',
        answer: '정기 세션, 중앙 아이디어톤, 중앙 해커톤 참여 시 수료증이 발급됩니다.',
      },   
  ];

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
  height: ${({ isOpen }) => (isOpen ? 'auto' : '80px')};
  padding: 7px;

  
  @media (min-width: 768px) and (max-width: 1024px) {
    height: ${({ isOpen }) => (isOpen ? 'auto' : '100%')};
    padding: 5px;
  }


  @media (max-width: 480px) {
    height: ${({ isOpen }) => (isOpen ? 'auto' : '100%')};
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
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
  font-size: 40px;
  color: #ffffff;
`;

const AnswerContainer = styled.div`
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
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
