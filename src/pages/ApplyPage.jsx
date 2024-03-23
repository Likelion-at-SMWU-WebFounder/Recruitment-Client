import React, { useEffect } from 'react';
import styled from 'styled-components';
import Question from '../components/Question';

const ApplyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
    <Container>
        <Question />
    </Container>
    </Layout>
  );
};

export default ApplyPage;


const Layout = styled.div`
  display: flex;
`;


const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 70px;
  margin-left: 70px;

  @media (max-width: 480px) {
    transform-origin: top left;
    transform: scale(0.45);
    margin-left: 0px;
    padding: 60px;
  }
`;
