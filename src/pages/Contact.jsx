import React, { useEffect } from "react";
import styled from "styled-components";
import FAQList from "../components/FAQList";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Container>
        <Text
          MobliefontSize="30px"
          fontSize="40px"
          marginBottom="20px"
          fontWeight="600"
        >
          CONTACT
        </Text>
        <Text
          MoblieLineHeight="24px"
          MobliefontSize="16px"
          fontSize="20px"
          marginBottom="40px"
          fontWeight="200"
        >
          운영 및 후원 관련 문의사항이 있으시다면, 하단 연락처로 문의주시기
          바랍니다.{" "}
        </Text>

        <SNSContainer>
          <SNSBox
            href="https://www.instagram.com/sookmyung_likelion/"
            target="_blank"
          >
            <Icon
              src={`${process.env.REACT_APP_IMAGE_URL}/Insta.svg`}
              alt="Instagram"
            ></Icon>
            <Text
              TabletfontSize="22px"
              MoblieLineHeight="10px"
              MobliefontSize="10px"
              fontSize="35px"
              marginBottom="10px"
              fontWeight="600"
            >
              INSTAGRAM
            </Text>
            <Text
              TabletfontSize="15px"
              MoblieLineHeight="10px"
              MobliefontSize="9px"
              fontSize="27px"
              marginBottom="10px"
              fontWeight="200"
            >
              @sookmyung_likelion
            </Text>
          </SNSBox>
          <SNSBox
            href="https://open.kakao.com/me/likelion_sookmyung"
            target="_blank"
          >
            <Icon
              src={`${process.env.REACT_APP_IMAGE_URL}/Kakao.svg`}
              alt="KakaoTalk"
            ></Icon>
            <Text
              TabletfontSize="18px"
              MoblieLineHeight="9px"
              MobliefontSize="10px"
              fontSize="35px"
              marginBottom="10px"
              fontWeight="600"
            >
              카카오톡 오픈채팅
            </Text>
            <Text
              TabletfontSize="15px"
              MoblieLineHeight="9px"
              MobliefontSize="9px"
              fontSize="27px"
              marginBottom="10px"
              fontWeight="200"
            >
              참여코드: likelion
            </Text>
          </SNSBox>
          <SNSBox
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=sookmyung@likelion.org"
            target="_blank"
          >
            <Icon
              src={`${process.env.REACT_APP_IMAGE_URL}/Gmail.svg`}
              alt="Email"
            ></Icon>
            <Text
              TabletfontSize="22px"
              MoblieLineHeight="10px"
              MobliefontSize="10px"
              fontSize="35px"
              marginBottom="10px"
              fontWeight="600"
            >
              E-mail
            </Text>
            <Text
              TabletfontSize="15px"
              MoblieLineHeight="10px"
              MobliefontSize="9px"
              fontSize="27px"
              marginBottom="10px"
              fontWeight="200"
            >
              sookmyung@likelion.org
            </Text>
          </SNSBox>
        </SNSContainer>

        <Text
          MobliefontSize="28px"
          fontSize="40px"
          marginBottom="20px"
          fontWeight="600"
        >
          FAQ
        </Text>
        <Text
          MobliefontSize="17px"
          fontSize="20px"
          marginBottom="40px"
          fontWeight="200"
        >
          자주 묻는 질문들을 확인해 보세요.
        </Text>
        <FAQList />
      </Container>
    </Layout>
  );
};

export default Contact;

const Text = styled.div`
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 33px;
  padding-left: 15px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-family: Noto Sans KR Thin;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.TabletfontSize};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.MobliefontSize};
    line-height: ${(props) => props.MoblieLineHeight};
    padding-left: 0px;
  }
`;

const Layout = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -120px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: -80px;
  }
`;

const SNSContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 160px;

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    margin-bottom: 70px;
    gap: 7px;
    margin-top: 0px;
    margin-left: 0px;
  }
`;

const SNSBox = styled.a`
  width: 380px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  background: ${(props) => props.background};
  color: #ffffff;
  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 225px;
    height: 210px;
  }

  @media (max-width: 480px) {
    width: 115px;
    height: 110px;
    padding: 10px;
    border-radius: 15px;
  }
`;

const Icon = styled.img`
  margin: 7px;
  margin-bottom: 30px;
  width: 100px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 55px;
  }

  @media (max-width: 480px) {
    width: 30px;
    margin-bottom: 15px;
    margin-left: 0px;
  }
`;
