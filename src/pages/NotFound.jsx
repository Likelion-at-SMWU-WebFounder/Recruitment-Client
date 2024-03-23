import React from "react";
import styled from "styled-components";
import * as S from "../style/LayoutStyle";

const NotFound = () => {
  const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 9rem;

    @media (max-width: 480px) {
      margin-top: 2rem;
    }
  `;
  const Img = styled.img`
    width: 371px;
    height: 303px;
    flex-shrink: 0;

    @media (max-width: 480px) {
      width: 80%;
    }
  `;

  const Imgg = styled.img`
    width: 151px;
    height: 115px;
    flex-shrink: 0;
    position: absolute;
    top: -5rem;
    left: calc(50% + 150px);

    @media (max-width: 480px) {
      width: 80px;
      left: 70%;
    }
  `;

  const Text = styled.div`
    margin-top: 2rem;
    text-align: center;
    font-family: "Noto Sans Medium";
    font-size: 50px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.525px;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  `;

  const SubText = styled.div`
    margin-top: 3rem;
    text-align: center;
    font-family: "Noto Sans Regular";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -2.02px;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  `;

  return (
    <S.Layout>
      <S.Container>
        <ImgContainer>
          <Img
            src={`${process.env.REACT_APP_IMAGE_URL}/lionwow.svg`}
            alt="lionwow"
          />
          <Imgg
            src={`${process.env.REACT_APP_IMAGE_URL}/question.svg`}
            alt="question"
          />
        </ImgContainer>
        <Text>요청하신 페이지를 찾을 수 없습니다. </Text>
        <SubText>
          페이지 주소가 잘못 입력되었거나, 삭제된 페이지일 수 있습니다.
        </SubText>
      </S.Container>
    </S.Layout>
  );
};

export default NotFound;
