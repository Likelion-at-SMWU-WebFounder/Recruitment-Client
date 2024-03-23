import React from "react";
import styled from "styled-components";

const Information = () => {
  return (
    <FormContainer>
      <Text marginTop="130px" marginLeft="-450px">
        멋쟁이사자처럼 숙명여대는 이런 사람을 찾습니다!
      </Text>
      <SmallContainer marginLeft="-500px">
        <SmallText>
          • 코딩을 배워보고 싶은 <BoldText>왕초보</BoldText>
        </SmallText>
        <SmallText>
          • 나만의 아이디어를 <BoldText>웹 서비스로 구현 및 배포</BoldText>{" "}
          해보고 싶은 사람
        </SmallText>
        <SmallText>
          • 혼자 공부는 그만! 사람들과 <BoldText>함께 웹 개발을 공부</BoldText>
          하고, <BoldText>개발 인적 네트워킹을 형성</BoldText>하고 싶은 사람
        </SmallText>
        <SmallText>
          • 1년 간 멋쟁이사자처럼에서 활동하고 여름방학 동안 진행하는{" "}
          <BoldText>장기 해커톤</BoldText>에 참가할 수 있는 사람
        </SmallText>
        <SmallText>
          • <BoldText>매주 화요일 저녁 7시 ~ 9시</BoldText>에 동아리에 참여할 수
          있는 사람
        </SmallText>
        <SmallText>
          • 포기하지 않고 <BoldText>도전하는 사람</BoldText>
        </SmallText>
        <SmallText>
          • 모르는 것을 창피해 하지 않는 사람 모른다고 숨는 사람보다는{" "}
          <BoldText>적극적으로 질문하고 성장</BoldText>하려는 사람
        </SmallText>
        <SmallText>
          • 완성형인 사람보다 <BoldText>함께 성장하고자 하는 사람</BoldText>
        </SmallText>
      </SmallContainer>
      <TextBox>
        모집일정
        <WarnText>*최종 합격 시, 활동 기간 1년을 준수해야 합니다. </WarnText>
      </TextBox>
      <BoxContainer>
        <RoundedBox background="#FFDEB9">
          서류 접수
          <ChangeText fontWeight="200" fontSize="18px">
            2/17(토)~2/23(금) 18:00
          </ChangeText>
        </RoundedBox>
        <RoundedBox background="#FFC88C">
          1차 합격자 발표
          <ChangeText fontWeight="200" fontSize="24px">
            2/27(화)
          </ChangeText>
        </RoundedBox>
        <RoundedBox background="#FFB666">
          면접 *대면 원칙
          <ChangeText fontWeight="200" fontSize="24px">
            2/29(목)~3/1(금)
          </ChangeText>
        </RoundedBox>
        <RoundedBox background="#FFA94C">
          최종 합격자 발표
          <ChangeText fontWeight="200" fontSize="24px">
            3/5(화)
          </ChangeText>
        </RoundedBox>
      </BoxContainer>
    </FormContainer>
  );
};

export default Information;

const Text = styled.div`
  color: white;
  font-size: 43px;
  font-weight: 700;
  line-height: 65px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 26px;
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-left: 5px;
  }
`;

const SmallText = styled.div`
  color: white;
  line-height: 1.5;
  margin-top: 15px;
  font-size: 20px;
  font-family: "Noto Sans Light";

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 25px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

const BoldText = styled.span`
  font-family: "Noto Sans Bold";
  font-size: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 25px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const WarnText = styled.div`
  font-family: "Noto Sans Thin";
  font-size: 13px;
  margin-top: 25px;
  margin-left: 15px;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 15px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 10px;
  }
`;

const ChangeText = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: ${(props) => props.marginLeft};

  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: left;
    margin: 40px;
  }

  @media (max-width: 480px) {
    align-items: left;
    margin: 27px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 43px;
  font-weight: 700;
  margin-top: 120px;
  margin-left: -880px;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
    margin-top: 30px;
    margin-left: -150px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 30px;
    margin-left: -22px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  padding-bottom: 100px;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 20px;
  }
`;

const RoundedBox = styled.div`
  width: 330px;
  height: 230px;
  border: 2px solid #333;
  border-radius: 30px;
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 40px;
  font-size: 34px;
  font-weight: 700;
  background: ${(props) => props.background};
  line-height: 75px;
  white-space: pre-line;
  flex-direction: column;
  color: #111111;

  @media (max-width: 480px) {
    width: calc(50% - 10px);
    line-height: 36px;
    height: 110px;
    font-size: 14px;
    border: 1px solid #333;
    border-radius: 17px;
    padding: 15px;
    margin-bottom: 20px;
  }
`;
