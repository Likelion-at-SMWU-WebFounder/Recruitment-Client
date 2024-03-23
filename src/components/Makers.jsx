import React, { useEffect } from "react";
import styled from "styled-components";

const Makers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Container>
        <Text marginLeft="-120px">
          <BoldText>멋쟁이사자처럼 숙명여대 홈페이지</BoldText>를{" "}
          {768 <= window.innerWidth <= 480 && <br />} 만든 멋쟁이
          개발자들입니다. <Hr />
        </Text>

        <RowProfile>
          <ProfileContainer>
            <Img src="/heesu.svg" alt="Profile" />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                소희수 | 기획/디자인
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 중어중문학부 · IT공학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/jiyoon.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                배지윤 | 프론트엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 수학과 · IT공학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
        </RowProfile>
        <RowProfile>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/eunsu.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                양은수 | 프론트엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 컴퓨터과학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/yujin.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                나유진 | 프론트엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 컴퓨터과학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
        </RowProfile>
        <RowProfile>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/sumin.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                이수민 | 백엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 컴퓨터과학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/ahyun.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                임아현 | 백엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 IT공학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
        </RowProfile>
        <RowProfile>
          <ProfileContainer>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/soyoon.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                박소윤 | 백엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 IT공학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
          <ProfileContainer style={{ visibility: "hidden" }}>
            <Img
              src={`${process.env.REACT_APP_IMAGE_URL}/soyoon.svg`}
              alt="Profile"
            />
            <BoxContainer>
              <ProfileText style={{ fontWeight: "800", fontSize: "20px" }}>
                박소윤 | 백엔드
              </ProfileText>
              <ProfileText style={{ marginRight: "40px" }}>
                멋쟁이사자처럼 숙명여대 10기
              </ProfileText>
              <ProfileText>숙명여대 IT공학전공</ProfileText>
            </BoxContainer>
          </ProfileContainer>
        </RowProfile>
      </Container>
    </Layout>
  );
};

export default Makers;

const Text = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 300;
  line-height: 50px;
  padding-left: 25px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
    line-height: 38px;
    padding-left: 80px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 30px;
    padding-left: 55px;
  }
`;

const Img = styled.img`
  margin-top: 30px;
  width: 180px;
  margin-left: 50px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 120px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-top: 30px;
  }
`;

const Layout = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hr = styled.hr`
  border: 1px solid #ffffff;
  margin-top: 60px;
  width: 1250px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 750px;
    margin: 15px;
    margin-left: 0px;
  }

  @media (max-width: 480px) {
    width: 330px;
    margin: 10px;
    margin-left: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  margin-left: -20px;
  margin-top: 40px;

  @media (max-width: 480px) {
    margin-top: -70px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 50px;
  margin-top: 40px;
  margin-left: -10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 35px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: 30px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    margin-left: -110px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    margin-left: -110px;
  }
`;

const RowProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: -60px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;

const ProfileText = styled.div`
  font-size: 20px;
  line-height: 36px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
    margin-left: 10px;
    margin: 5px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 13px;
    margin-left: 10px;
    margin: 5px;
  }
`;

const BoldText = styled.span`
  font-size: 40px;
  font-weight: 800;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
