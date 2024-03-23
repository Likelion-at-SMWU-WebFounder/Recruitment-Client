import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubmitSuccess = () => {
  return (
    <Layout>
      <Img src={`${process.env.REACT_APP_IMAGE_URL}/sm_logo.svg`} alt="logo" />
      <Container>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/StarLion.svg`}
          alt="lion"
        />
        <Text fontSize="26px" fontWeight="800">
          서류 접수가 완료되었습니다.
        </Text>
        <Text
          fontSize="22px"
          fontWeight="lighter"
          marginTop="10px"
          style={{ textAlign: "center" }}
        >
          정상적 서류 접수 여부는 확인을 위해 메일 발송해드렸습니다.
          <br />
          멋쟁이사자처럼 숙명여대 12기 모집에 지원해주셔서 감사합니다.{" "}
        </Text>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <ResultBox>홈으로</ResultBox>
        </Link>
      </Container>
    </Layout>
  );
};

export default SubmitSuccess;

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
