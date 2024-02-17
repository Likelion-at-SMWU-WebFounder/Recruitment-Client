import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FinalResult from './FinalResult';

// export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
// export const HOME_URL = process.env.REACT_APP_HOME_URL;

const Text = styled.div`
  color: white;
  font-size: 37px;
  font-weight: 700;
  line-height: 40px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (max-width: 480px) {
    font-size: 16px;
    font-size: ${(props) => props.MobileFontSize};
  }
`;

const Layout = styled.div`
  display: flex;
  padding: 100px;
  background-color: #111111;
`;

const Img = styled.img`
  margin-bottom: 80px;

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  color: white;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: -30px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  gap: 25px;

  @media (max-width: 480px) {
    padding: 10px;
    gap: 15px;
  }
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: 50px;
  border-radius: 15px;
  border: 1px solid #fefefe;
  background: rgba(254, 254, 254, 0);
  color: white;
  font-size: 30px;
  padding: 15px;

  @media (max-width: 480px) {
    width: ${(props) => props.mobileWidth};
    height: 40px;
    border-radius: 12px;
    font-size: 20px;
  }
`;

const ResultBox = styled.div`
  width: 240px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #111111;
  margin-top: 50px;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  cursor: pointer;

  @media (max-width: 480px) {
    width: 110px;
    height: 40px;
    border-radius: 12px;
    font-size: 16px;
    margin-top: 40px;
  }
`;

const getTrackText = (track) => {
  switch (track) {
    case 'pm':
      return '기획/디자인';
    case 'fe':
      return '프론트엔드';
    case 'be':
      return '백엔드';
    default:
      return '';
  }
};

const FinalVerification = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [finalResult, setFinalResult] = useState(null);

  const handleResultCheck = async () => {
    try {
      const response = await axios.post(
        `http://52.79.255.210:8080/api/recruit/result/interview`,
        {
          name,
          studentId,
          password,
        },
      );

      const { isSuccess, result, message } = response.data;

      if (isSuccess) {
        if (result.interview === 'PASS' || result.interview === 'REJECT') {
          setFinalResult({
            name: result.name,
            message: result.interview.toLowerCase(),
            track: result.track,
          });
        }
      } else {
        console.error('Error:', message);
        alert('잘못된 회원정보이거나, 존재하지 않는 회원정보입니다.');
      }
    } catch (error) {
      console.error('Error while checking result:', error);
      alert('잘못된 회원정보이거나, 존재하지 않는 회원정보입니다.');
    }
  };

  return (
    <Layout>
      <Container>
        {finalResult ? null : (
          <>
            <Img src="https://s3.ap-northeast-2.amazonaws.com/smwu-likelion.com/sm_logo.svg" alt="logo" />
            <Text marginBottom="60px" MobileFontSize="24px">
              최종 심사 결과확인
            </Text>
            <BoxContainer>
              <Text>이름</Text>
              <Input
                autocomplete="off"
                width="390px"
                mobileWidth="120px"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </BoxContainer>
            <BoxContainer>
              <Text>학번</Text>
              <Input
                autocomplete="off"
                width="390px"
                mobileWidth="120px"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </BoxContainer>
            <BoxContainer>
              <Text>비밀번호</Text>
              <Input
                autocomplete="off"
                width="320px"
                mobileWidth="90px"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </BoxContainer>

            <ResultBox onClick={handleResultCheck}>결과 확인</ResultBox>
          </>
        )}

        {finalResult && (
          <FinalResult
            name={name}
            message={finalResult && finalResult.message}
            track={finalResult && getTrackText(finalResult.track)}
          />
        )}
      </Container>
    </Layout>
  );
};

export default FinalVerification;
