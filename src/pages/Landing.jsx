import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "../style/LayoutStyle";
import { Desktop, Mobile } from "../MediaQuery/useMediaQuery";

const Landing = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };

  const txt1 = "Be The Lion, ";
  const txt2 = "Rule Your World !";

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < txt1.length) {
        setText(text + txt1[count]);
        setCount(count + 1);
      } else {
        setText2(text2 + txt2[count - txt1.length]);
        setCount(count + 1);
      }
    }, 100);
    if (count === txt1.length + txt2.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, text, text2]);

  return (
    <>
      <Desktop>
        <Layout>
          <S.Container>
            <S.RowBox>
              <Slogan>
                {text} <br></br> {text2}
              </Slogan>
              <S.ColumnBox>
                <Img
                  src={`${process.env.REACT_APP_IMAGE_URL}/lion.svg`}
                  alt="lion"
                />
                <LinkToAboutUsContainer>
                  <LinkToAboutUs onClick={onClick}>
                    <BoldText>숙명여대 멋쟁이사자처럼 </BoldText>
                    알아보기 ➔
                  </LinkToAboutUs>
                </LinkToAboutUsContainer>
              </S.ColumnBox>
            </S.RowBox>
          </S.Container>
        </Layout>
      </Desktop>
      <Mobile>
        <Container>
          <Img
            src={`${process.env.REACT_APP_IMAGE_URL}/lion.svg`}
            alt="lion"
            style={{ width: "80%", height: "auto", marginTop: "-60px" }}
          />
          <LinkToAboutUsContainer className="linkContainer">
            <LinkToAboutUs onClick={onClick}>
              <BoldText>숙명여대 멋쟁이사자처럼 </BoldText>
              <Div>알아보기 ➔</Div>
            </LinkToAboutUs>
          </LinkToAboutUsContainer>
        </Container>
      </Mobile>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  @media (max-width: 280px) {
    font-size: 25px;
    width: 280px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

const Div = styled.div`
  @media (max-width: 480px) {
    font-size: 25px;
    position: relative;
    right: auto;
  }
  @media (max-width: 280px) {
    font-size: 25px;
  }
`;
export default Landing;

const Slogan = styled.div`
  font-size: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -5.05px;
  width: 50%;
`;

const LinkToAboutUsContainer = styled.div`
  position: relative;
  margin-bottom: 100px;

  @media (max-width: 280px) {
    font-size: 10px;
    width: 280px;
  }
`;

const LinkToAboutUs = styled.div`
  color: #fefefe;
  font-size: 45px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -2.273px;
  font-family: "Noto Sans Thin";
  &:hover {
    color: #616161;
  }

  position: absolute;
  right: 0;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 1024px) {
    font-size: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BoldText = styled.span`
  font-family: "Noto Sans Bold";
  font-size: 45px;

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const Img = styled.img`
  width: 495px;
  height: 552px;
  flex-shrink: 0;
`;

const Layout = styled.div`
  height: 100vh;
`;
