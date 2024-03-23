import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import FirstResult from "../Result/FirstResult";

const FirstVerification = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [finalResult, setFinalResult] = useState(null);

  const handleResultCheck = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ROOT}/api/recruit/result/docs`,
        {
          name,
          studentId,
          password,
        }
      );

      const { isSuccess, result, message, interviewTime } = response.data;

      if (isSuccess) {
        if (result.docs === "PASS" || result.docs === "REJECT") {
          setFinalResult({
            name: result.name,
            message: result.docs.toLowerCase(),
            interviewTime: result.interviewTime,
          });
        }
      } else {
        console.error("Error:", message);
        alert("잘못된 회원정보이거나, 존재하지 않는 회원정보입니다.");
      }
    } catch (error) {
      console.error("Error while checking result:", error);
      alert("잘못된 회원정보이거나, 존재하지 않는 회원정보입니다.");
    }
  };

  return (
    <Layout>
      <Container>
        {finalResult ? null : (
          <>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/sm_logo.svg`}
              alt="logo"
            />
            <Text marginBottom="60px" MobileFontSize="20px">
              1차 심사 결과 확인
            </Text>
            <BoxContainer>
              <Text>성함</Text>
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
          <FirstResult
            name={name}
            message={finalResult && finalResult.message}
            interviewTime={finalResult && finalResult.interviewTime}
          />
        )}
      </Container>
    </Layout>
  );
};

export default FirstVerification;

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
