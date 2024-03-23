import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubmitFail = () => {
  return (
    <Layout>
      <Img src={`${process.env.REACT_APP_IMAGE_URL}/SMLogo.svg`} alt="logo" />
      <Container>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/StarLion.svg`}
          alt="lion"
        />
        <Text fontSize="26px" fontWeight="800">
          이미 지원 접수되었습니다.
        </Text>
        <Text fontSize="22px" fontWeight="lighter" marginTop="25px">
          지원접수는 1회까지만 가능합니다.
        </Text>
        <Text fontSize="22px" fontWeight="lighter" marginTop="5px">
          관련 문의: sookmyung@likelion.org
        </Text>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <ResultBox>홈으로</ResultBox>
        </Link>
      </Container>
    </Layout>
  );
};

export default SubmitFail;

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
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  cursor: pointer;
`;
