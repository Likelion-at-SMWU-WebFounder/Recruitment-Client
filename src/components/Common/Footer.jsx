import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/makers");
  };
  return (
    <FooterContainer>
      <LogoImg
        src={`${process.env.REACT_APP_IMAGE_URL}/footerLogo.svg`}
        alt="footerLogo"
      />
      <LikelionSMWU>멋쟁이사자처럼 숙명여대</LikelionSMWU>
      <CopyRight>
        Copyrightⓒ2023 멋쟁이사자처럼 숙명여대 All rights reserved.
      </CopyRight>
      <br></br>
      <SiteMakers onClick={onClick}>홈페이지 만든사람들{">"}</SiteMakers>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 3rem;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  height: 230px;
  margin-top: 70px;
`;

const LogoImg = styled.img`
  width: 20rem;
`;

const LikelionSMWU = styled.div`
  color: ${({ theme }) => theme.colors.lightWhite};
  font-family: Noto Sans Bold;
  margin: 4rem 0rem 0rem;
`;

const CopyRight = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: Noto Sans Regular;
  margin: 0.5rem 0 1rem;
  font-weight: 400;
`;

const SiteMakers = styled.div`
  color: ${({ theme }) => theme.colors.lightWhite};
  font-family: Noto Sans Regular;
  text-decoration: underline;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
