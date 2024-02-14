import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Text = styled.div`
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 33px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

const Layout = styled.div`
  display: flex;
  padding: 100px;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
    width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  
`;


const ResultBox = styled.div`
  width: 220px;
  height: 70px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #111111;
  margin-top: 40px;
  background: linear-gradient(180deg, #EB9537 5.52%, #ECC08F 96.15%);
  cursor: pointer;
`;


const SubmitSuccess = () => {
  
  return (
    <Layout>
     <Img src="/public/SMLogo.svg" alt="logo" />
    <Container>
      <Img src="/public/StarLion.svg" alt="lion" />
      <Text fontSize="26px" fontWeight="800">서류 접수가 완료되었습니다.</Text>
      <Text fontSize="22px" fontWeight="lighter" marginTop="10px">지원해 주셔서 감사합니다.</Text>
      <Link to="/home" style={{ textDecoration: 'none' }}>
    <ResultBox>홈으로</ResultBox>
    </Link>
    </Container>
    </Layout>
  );
};

export default SubmitSuccess;
