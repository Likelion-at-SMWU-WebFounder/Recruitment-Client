import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Information from '../components/Information';

const Text = styled.div`
  color: white;
  font-size: 43px;
  font-weight: 700;
  line-height: 65px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 26px;
    line-height: 36px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  margin-top: 30px;
  width: 300px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  color: white;
  width: 100%;
  background-image: url('https://s3.ap-northeast-2.amazonaws.com/smwu-likelion.com/Banner.svg');
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -123px;
  }
  
  @media (max-width: 480px) {
    margin-top: -123px;
  }
`;

const ResultBox = styled.div`
  width: 350px;
  height: 90px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #111111;
  margin-top: 70px;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
    font-size: 25px;
    margin-top: 40px;
    height: 65px;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    width: 130px;
    font-size: 13px;
    margin-top: 40px;
    height: 40px;
    border-radius: 15px;
  }
`;

const ColorText = styled.span`
  color: ${(props) => props.color};
  font-size: 47px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 30px;
  }
`;

const FinalRecruit = () => {
  return (
    <Layout>
      <Container>
        <Img src="https://s3.ap-northeast-2.amazonaws.com/smwu-likelion.com/lion.svg" alt="lion" />
        <Text marginTop="30px">
          숙명여대 멋쟁이사자처럼{' '}
          <ColorText color="#eb9537">
            최종 심사
          </ColorText>
          가 완료되었습니다.
        </Text>
        <Text marginBottom="20px">지원자 최종 심사 결과확인은 하단 링크를 통해 확인이 가능합니다.</Text>

        <Link to="/recruitment/result-verification" style={{ textDecoration: 'none' }}>
          <ResultBox>최종 심사 결과 확인</ResultBox>
        </Link>

        <Information />
      </Container>
    </Layout>
  );
};

export default FinalRecruit;
