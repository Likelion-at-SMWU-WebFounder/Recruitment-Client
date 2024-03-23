import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FirstResult = ({ name, message, interviewTime }) => {
  return (
    <Layout>
      <Container>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/sm_logo.svg`}
          alt="logo"
        />
        <PassContainer message={message}>
          <BoxContainer>
            <Hr />
            <Text>안녕하세요, 숙명여대 멋쟁이사자처럼 입니다.</Text>
            <Text>
              2024 멋쟁이사자처럼 12기 서류 전형 "합격"을 진심으로 축하드립니다.
            </Text>
            <Text>
              {name} 지원자님이 선택하셨던 면접 시간을 고려하여 아래의 일정으로
              면접 전형을 진행할 예정입니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>1. 면접 일시: {interviewTime} </Text>
            <Text>2. 면접 장소: 본교 명신관 505호 (대면 면접)</Text>
            <Text>
              3. 회신 사항: 면접 참석 여부를 금일 16시까지 반드시 받으신 문자
              번호로 회신 부탁드립니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>
              *면접 시간 10분 전까지 대기실(명신관 603호)에 착석해 주시길
              바랍니다.
            </Text>
            <Text>
              *불가피한 사정으로 면접 시간 변경이 필요한 경우, 마찬가지로 문자
              회신 부탁드립니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>숙명여대 멋쟁이사자처럼 운영진 드림</Text>
            <Hr />
          </BoxContainer>
        </PassContainer>

        <FailContainer message={message}>
          <BoxContainer>
            <Hr />
            <Text>
              멋쟁이사자처럼 모집에 관심을 갖고 지원해 주셔서 진심으로
              감사드립니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>
              우선, 많은 우수한 지원자들을 모시고 결정하느라 그 어느 때보다
              고심을 할 수밖에 없었음을 말씀드립니다.
            </Text>
            <Text>
              안타깝지만 지원자님의 우수한 역량에도 불구하고, 서류 심사 과정에서
              합격 소식을 전해드리지 못하게 되었습니다.
            </Text>
            <Text>
              아쉽지만 지원자님의 서류 지원에 대해 다시 한번 감사드리며, 저희
              멋쟁이사자처럼에 지원하신 모든 분들이 차후 더 좋은 기회를 맞이할
              것이라고 생각합니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>감사합니다.</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>숙명여대 멋쟁이사자처럼 운영진 드림</Text>
            <Hr />
          </BoxContainer>
        </FailContainer>
      </Container>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <ResultBox>홈으로</ResultBox>
      </Link>
    </Layout>
  );
};

export default FirstResult;

const Text = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 300;
  line-height: 33px;
  padding-left: 25px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 20px;
    padding-left: 10px;
  }
`;

const Layout = styled.div`
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 300px;
  margin-left: 50px;

  @media (max-width: 480px) {
    width: 200px;
    margin-left: 30px;
  }
`;

const Hr = styled.hr`
  border: 1px solid #ffffff;
  margin: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 740px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    width: 320px;
    margin: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  width: 100%;
`;

const PassContainer = styled.div`
  display: ${(props) => (props.message === "pass" ? "block" : "none")};
`;

const FailContainer = styled.div`
  display: ${(props) => (props.message === "reject" ? "block" : "none")};
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 30px;

  @media (max-width: 480px) {
    padding: 15px;
  }
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
  margin-top: 10px;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  cursor: pointer;
  color: #111111;

  @media (max-width: 480px) {
    padding: 5px;
    width: 100px;
    height: 40px;
    border-radius: 17px;
    font-size: 17px;
  }
`;
