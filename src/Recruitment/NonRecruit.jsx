import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Information from '../components/Information';


const Text = styled.div`
  color: white;
  font-size: 43px;
  font-weight: 700;
  line-height: 65px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;


const Img = styled.img`
  margin-top: 30px;
  width: 300px;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111111;
    color: white;
    width: 100%;
    background-image: url('https://s3.ap-northeast-2.amazonaws.com/smwu-likelion.com/Banner.svg');
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;

    @media (max-width: 480px) {
      margin-top: -123px;
    }

  form {
    align-items: center;
    margin-top: 50px;
    flex-direction: row;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    width: 870px;
    height: 60px;
    padding: 0.5em;
    border-radius: 15px;
    border: 2px solid #ffad54;
    background-color: #111111;
    color: #ffffff;
    font-size: 22px;
    margin-left: 40px;

    @media (max-width: 480px) {
      width: 220px;
      height: 30px;
      font-size: 13px;
      border-radius: 10px;
      margin-left: 10px;
    }

  }
  input::placeholder {
    color: #a3a3a3;
    font-size: 25px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  button {
    background-color: #ffad54;
    height: 60px;
    width: 160px;
    color: #000000;
    padding: 0.4em 1em;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    font-size: 22px;
    font-weight: 700;
    border-radius: 15px;

    @media (max-width: 480px) {
      border-radius: 10px;
      height: 30px;
      width: 80px;
      font-size: 13px;
      margin-left: 10px;
    }
  }

`;


const NonRecruit = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 이메일 형식을 확인하는 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      // 이메일 형식이 맞지 않으면 경고창 띄우기
      window.alert('올바른 이메일 형식이 아닙니다. 다시 입력해주세요.');
      return;
    }
  
    try {
      console.log('Sending email data:', { emailAdd: email });
  
      const response = await axios.post(`http://52.79.255.210:8080/api/recruit/mail`, { emailAdd: email });
  
      console.log('Response data:', response.data);

      if (response.status === 201) {
        setResponse('메일이 정상적으로 제출되었습니다.');
        setEmail('');
        window.alert('메일이 정상적으로 제출되었습니다.');
      } else {
        setResponse('서버에서 잘못된 응답을 받았습니다.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.result.map((error) => error.message).join('\n');
        setResponse(errorMessage);
      } else {
        setResponse('요청을 처리하는 동안 오류가 발생했습니다.');
      }
    }
  };
  
  

  return (
    <Layout>
      <Container>
        <Img src="https://s3.ap-northeast-2.amazonaws.com/smwu-likelion.com/SadLion.svg" alt="lion" />
        <Text>지금은 모집기간이 아닙니다.</Text>
        <Text>숙명여대 멋쟁이사자처럼 모집이 시작되면 메일을 보내드립니다.</Text>

        {/* 버튼에 onClick 이벤트 추가 */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sooklion@gmail.com"
          />
          <button type="submit" onClick={handleSubmit}>
            알림 신청
          </button>
        </form>

        <Information />
      </Container>
    </Layout>
  );
};

export default NonRecruit;
