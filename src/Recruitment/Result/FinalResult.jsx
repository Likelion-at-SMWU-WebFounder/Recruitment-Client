import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FinalResult = ({ name, message, track }) => {
  return (
    <Layout>
      <Container>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/sm_logo.svg`}
          alt="logo"
        />
        <PassContainer message={message}>
          <BoxContainer>
            <Hr MobileMarginTop="-20px" />
            <Text>안녕하세요, 멋쟁이사자처럼 숙명여대 입니다.</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>멋쟁이사자처럼에 지원해 주셔서 진심으로 감사드립니다.</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>
              우선, 치열한 경쟁 속에서 운영진들과 거듭 회의를 거쳐 결정된 결과인
              만큼 한 해 동안 끝까지 함께하길 희망한다는 말씀부터 드립니다.
            </Text>
            <Text>
              <ColorText color="#E67800">{track}</ColorText> 트랙에 지원하신
              <ColorText color="#E67800"> {name}</ColorText>님은 멋쟁이사자처럼
              12기에
              <ColorText color="#E67800"> 최종 합격</ColorText>하셨습니다.
            </Text>
            <Text>
              오늘 중으로 카카오톡 단체방에 초대될 예정이며, 관련 공지 참고해
              주시길 바랍니다.
            </Text>
            <Text>
              또한, 최종 합격 확인 여부는 아래 구글 폼 작성으로 확인할 예정이니,
              금일 16시까지 반드시 폼 작성 부탁드립니다.
            </Text>

            <Text>
              다시 한번 합격을 진심으로 축하드리며, {name}님이 보여주신 열정
              기대하고 있겠습니다.
            </Text>
            <Text>감사합니다.</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>멋쟁이사자처럼 숙명여대 운영진 드림</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>[최종 합격 확인 회신] *금일 16시까지 반드시 제출</Text>
            <AText
              href="https://docs.google.com/forms/d/e/1FAIpQLSe91tUYRMvMRiK3nAviXnNePDDpS3JhRfudOBphni011pwneg/viewform"
              target="_blank"
            >
              멋쟁이사자처럼 숙명여대 12기 합격 확인 구글 폼
            </AText>
          </BoxContainer>
          <BoxContainer>
            <Lion
              src={`${process.env.REACT_APP_IMAGE_URL}/WinkingLion.svg`}
              alt="lion"
            />
            <Hr marginTop="75px" MobileMarginTop="-20px" />
          </BoxContainer>
        </PassContainer>

        <FailContainer message={message}>
          <BoxContainer>
            <Hr />
            <Text>안녕하세요, 멋쟁이사자처럼 숙명여대 입니다.</Text>
          </BoxContainer>
          <BoxContainer>
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
              안타깝지만 지원자님의 우수한 역량에도 불구하고, 면접 심사 과정에서{" "}
              <ColorText color="#E67800">{name}</ColorText>님께 합격 소식을
              전해드리지 못하게 되었습니다.
            </Text>
            <Text>
              저희 멋쟁이사자처럼에 지원하신 모든 분들이 차후 더 좋은 기회를
              맞이할 것이라고 생각하며, 아쉽지만{" "}
              <ColorText color="#E67800">{name}</ColorText>님의 면접 참석에 대해
              다시 한번 감사드립니다.
            </Text>
          </BoxContainer>
          <BoxContainer>
            <Text>감사합니다.</Text>
          </BoxContainer>
          <BoxContainer>
            <Text>멋쟁이사자처럼 숙명여대 운영진 드림</Text>
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

export default FinalResult;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  padding-left: 25px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 20px;
    padding-left: 10px;
  }
`;

const AText = styled.a`
  color: white;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  padding-left: 25px;

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 20px;
    padding-left: 10px;
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 300px;
  margin-left: 50px;

  @media (max-width: 480px) {
    width: 200px;
    margin-left: 50px;
  }
`;

const Lion = styled.img`
  width: 300px;
  margin-left: 1100px;
  margin-top: -440px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Hr = styled.hr`
  border: 1px solid #ffffff;
  margin: 20px;
  margin-top: ${(props) => props.marginTop};

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 90px;
  }

  @media (max-width: 480px) {
    width: 340px;
    margin: 10px;
    margin-top: ${(props) => props.MobileMarginTop};
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
  background-image: url("${process.env.REACT_APP_IMAGE_URL}/Confetti.svg");
  background-size: 70% auto;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 25px;

  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: 110% auto;
    background-position: left top 90px;
  }

  @media (max-width: 480px) {
    background-size: 120% auto;
    background-position: left top 40px;
  }
`;

const FailContainer = styled.div`
  display: ${(props) => (props.message === "reject" ? "block" : "none")};
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 25px;
  width: 1500px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 800px;
    padding: 17px;
  }

  @media (max-width: 480px) {
    width: 400px;
    padding: 17px;
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
  color: #111111;
  margin-top: 10px;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 5px;
    width: 100px;
    height: 40px;
    border-radius: 17px;
    font-size: 17px;
  }
`;

const ColorText = styled.span`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;
