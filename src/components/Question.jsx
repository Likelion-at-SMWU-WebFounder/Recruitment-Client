import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { questions, agree, scheduleData, required } from "./data";

const Question = () => {
  const { part } = useParams();
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  let partName = "";
  let backgroundImage = "";

  // 이메일 유효검사
  function emailCheck(email_address) {
    const email_regex = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return !email_regex.test(email_address);
  }

  const getTrackField = (part) => {
    switch (part) {
      case "plan":
        return "plandesign";
      case "frontend":
        return "frontend";
      case "backend":
        return "backend";
      default:
        return part;
    }
  };

  const getShortTrack = (part) => {
    switch (part) {
      case "plan":
        return "pm";
      case "frontend":
        return "fe";
      case "backend":
        return "be";
      default:
        return "unknown";
    }
  };

  switch (part) {
    case "plan":
      partName = "기획 · 디자인";
      backgroundImage = `${process.env.REACT_APP_IMAGE_URL}/planline.svg`;
      break;
    case "frontend":
      partName = "프론트엔드";
      backgroundImage = `${process.env.REACT_APP_IMAGE_URL}/frontline.svg`;
      break;
    case "backend":
      partName = "백엔드";
      backgroundImage = `${process.env.REACT_APP_IMAGE_URL}/backline.svg`;
      break;
    default:
      partName = "error";
  }
  const defaultValues = {
    5: "재학",
    7: "O",
  };

  const initialAnswers = Array(30)
    .fill("")
    .map((_, index) => defaultValues[index] || "");

  const [answers, setAnswers] = useState(initialAnswers);
  const maxLength = 600; // 최대 글자수
  const [fileName, setFileName] = useState("");

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];

    if (index === 1 && value.length > 11) {
      alert("전화번호는 ‘-’없이 11자리로 입력해주세요.");
      value = value.slice(0, 11);
    } else if (index === 2 && value.length > 7) {
      alert("학번은 7자리로 입력해주세요.");
      value = value.slice(0, 7);
    }

    if (index === 19) {
      // 입력된 값이 숫자가 아닌 경우에만 알림 표시
      if (!/^[0-9]*$/.test(value)) {
        alert("비밀번호는 숫자로만 입력해주세요.");
        return;
      }
    }

    if (index === 23) {
      newAnswers[index] = fileName;
    } else {
      // 텍스트 길이가 최대 글자수를 초과하지 않는지 확인
      if (value.length <= maxLength) {
        newAnswers[index] = value;
      } else {
        // 최대 글자수를 초과한 경우에는 최대 글자수까지만 잘라냄
        newAnswers[index] =
          typeof value === "string" ? value.slice(0, maxLength) : value;
      }
    }

    setAnswers(newAnswers);
  };

  const [checkboxValues, setCheckboxValues] = useState(
    Array(scheduleData.length).fill(false)
  );

  const handleCheckboxChange = (index, checked) => {
    const newCheckboxValues = [...checkboxValues];
    newCheckboxValues[index] = checked;
    setCheckboxValues(newCheckboxValues);
  };

  const [submitted, setSubmitted] = useState(false);

  const handleEnd = () => {
    window.alert("2/23(금) 18:00 서류 제출 마감 시간이 초과되었습니다. ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;

    const shortTrack = getShortTrack(part);
    const apiUrl = `${process.env.REACT_APP_API_ROOT}/api/recruit/docs?track=${shortTrack}`;

    // 필수 입력 필드 확인
    const requiredFields = [
      answers[0], // 성함
      answers[1], // 전화번호
      answers[2], // 학번
      answers[3], // 전공
      answers[4], // 수료학기
      answers[6], // 졸업예정연도
      answers[22], // 이메일

      answers[8], // 서류 1번문항
      answers[9], // 서류 2번문항
      answers[10], // 서류 3번문항
      answers[11], // 서류 4번문항
      answers[12], // 서류 5번문항
      answers[13], // 서류 6번문항
      answers[20], // 위 내용 확인 (필수)
      answers[21], // 개인정보 동의 (필수)
      answers[19], // 개인 비밀번호
    ];

    // 필수 입력 필드 중 빈 값이 있는지 확인
    const hasEmptyFields = requiredFields.some((field) => !field);
    const hasInterviewDate = checkboxValues.every((field) => !field);

    if (hasEmptyFields) {
      alert("입력되지 않은 항목이 있습니다. 확인 후 다시 제출해주세요.");
      return;
    } else if (hasInterviewDate) {
      alert("면접 가능 일자가 선택되지 않았습니다. 확인 후 다시 제출해주세요.");
      return;
    } else if (emailCheck(answers[22])) {
      alert("유효한 이메일 형식으로 입력해주세요.");
      return;
    } else {
      // 모든 필수 입력 폼이 작성된 경우, 서버로 데이터 전송 후 페이지 이동
      try {
        const trackfield = getTrackField(part);
        const selectedInterviewTimes = scheduleData.filter(
          (time, index) => checkboxValues[index]
        );
        const interviewTimes = {};
        selectedInterviewTimes.forEach((time, index) => {
          interviewTimes[index + 1] = time;
        });

        const requestBody = {
          studentInfo: {
            agreeToEventParticipation: answers[20],
            agreeToTerms: answers[21],
            completedSem: answers[4],
            email: answers[22],
            graduatedYear: answers[6],
            major: answers[3],
            name: answers[0],
            password: answers[19],
            phoneNumber: answers[1],
            portfolio: answers[14],
            programmers: answers[7] === "O" ? "ENROLLED" : "NOT_ENROLLED",
            programmersImg: answers[23],
            schoolStatus: answers[5] === "재학" ? "ENROLLED" : "ON_LEAVE",
            studentId: answers[2],
            track: trackfield,
          },
          answerList: {
            a1: answers[8],
            a2: answers[9],
            a3: answers[10],
            a4: answers[11],
            a5: answers[12],
            a6: answers[13],
            a7: answers[14],
          },
          interview_time: interviewTimes,
        };

        const confirmation = window.confirm(
          "제출 이후에는 작성내용 조회 및 수정, 지원 취소가 불가합니다. 제출하시겠습니까?"
        );
        if (confirmation) {
          try {
            const response = await axios.post(apiUrl, requestBody);

            if (response.data.code === 404) {
              window.alert(response.data.message);
              return;
            } else {
              setSubmitted(true);
              navigate("/recruitment/submit-success");
            }
          } catch (error) {
            console.error("서버 전송 중 오류 발생:", error);
          }
          setSubmitted(true);
        }
      } catch (error) {
        console.error("서버 전송 중 오류 발생:", error);
      }
    }

    try {
      const trackfield = getTrackField(part);
      // console.log('Track:', trackfield);

      const selectedInterviewTimes = scheduleData.filter(
        (time, index) => checkboxValues[index]
      );

      const interviewTimes = {};
      selectedInterviewTimes.forEach((time, index) => {
        interviewTimes[index + 1] = time;
      });

      const requestBody = {
        studentInfo: {
          agreeToEventParticipation: answers[20],
          agreeToTerms: answers[21],
          completedSem: answers[4],
          email: answers[22],
          graduatedYear: answers[6],
          major: answers[3],
          name: answers[0],
          password: answers[19],
          phoneNumber: answers[1],
          portfolio: answers[14],
          programmers: answers[7] === "O" ? "ENROLLED" : "NOT_ENROLLED",
          programmersImg: answers[23],
          schoolStatus: answers[5] === "재학" ? "ENROLLED" : "ON_LEAVE",
          studentId: answers[2],
          track: trackfield,
        },
        answerList: {
          a1: answers[8],
          a2: answers[9],
          a3: answers[10],
          a4: answers[11],
          a5: answers[12],
          a6: answers[13],
          a7: answers[14],
        },
        interview_time: interviewTimes,
      };

      // console.log('API URL:', apiUrl);

      if (response.status === 200) {
        const trackfield = getTrackField(part);
      } else {
        console.error(
          "API 요청에 실패했습니다.",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생", error);
    }
  };

  const uploadImageToS3 = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      // AWS S3 업로드 API 엔드포인트와 업로드 설정에 따라 수정 필요
      const response = await axios.post(
        `${process.env.REACT_APP_API_ROOT}/api/recruit/docs?track=${shortTrack}`,
        formData
      );

      // 업로드된 이미지의 URL 반환
      return response.data.imageUrl;
    } catch (error) {
      console.error("이미지를 AWS S3에 업로드하는 중 오류 발생:", error);
      throw error;
    }
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];

    try {
      // 이미지를 AWS S3에 업로드하고 URL을 가져옴
      const imageUrl = await uploadImageToS3(imageFile);

      // programmersImg 상태 업데이트
      handleInputChange(23, imageUrl);
      setFileName(imageFile.name);
    } catch (error) {
      console.error("이미지 업로드 중 오류 발생:", error);

      // S3 임시방편!! S3 수정시 하단 코드 삭제할것
      setFileName(imageFile.name);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Img
          src={`${process.env.REACT_APP_IMAGE_URL}/sm_logo.svg`}
          alt="logo"
        />
        <Row>
          <PartText background={backgroundImage}>{partName} 트랙</PartText>
          <TitleText>&nbsp;서류 작성 페이지 입니다.</TitleText>
        </Row>
        <Text fontSize="20px" marginTop="45px" style={{ fontWeight: "200" }}>
          &nbsp;&nbsp;*필수 입력 폼은 모두 작성하셔야 합니다.
        </Text>
        <Hr marginTop="80px" marginBottom="70px" />
        <Row>
          <FormContainer>
            <Text fontSize="20px">성함 *</Text>
            <Input
              autocomplete="off"
              placeholder="김멋사"
              width="260px"
              marginRight="150px"
              value={answers[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
          <FormContainer>
            <Text fontSize="20px">전화번호 *</Text>
            <Input
              autocomplete="off"
              placeholder="01012345678"
              width="260px"
              value={answers[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
        </Row>
        <Row>
          <FormContainer>
            <Text fontSize="20px">학번 *</Text>
            <Input
              autocomplete="off"
              placeholder="2345789"
              width="260px"
              marginRight="150px"
              value={answers[2]}
              onChange={(e) => handleInputChange(2, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
          <FormContainer>
            <Text fontSize="20px">전공 *</Text>
            <Input
              autocomplete="off"
              placeholder="미디어학부, 인공지능공학부"
              width="296px"
              value={answers[3]}
              onChange={(e) => handleInputChange(3, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
        </Row>
        <Row style={{ marginLeft: "570px" }}>
          <Text
            fontSize="13px"
            marginLeft="-50px"
            marginTop="-27px"
            marginBottom="0px"
          >
            *본전공/복수전공/연계전공 등 자유롭게 입력 가능
          </Text>
        </Row>
        <Row>
          <FormContainer>
            <Text fontSize="20px">수료 학기 *</Text>
            <Input
              autocomplete="off"
              placeholder="3"
              width="110px"
              marginRight="260px"
              value={answers[4]}
              onChange={(e) => handleInputChange(4, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
          <FormContainer>
            <Text fontSize="20px">재/휴학 여부 *</Text>
            <Select
              width="125px"
              value={answers[5]}
              onChange={(e) => handleInputChange(5, e.target.value)}
            >
              <Option value="재학">재학</Option>
              <Option value="휴학">휴학</Option>
            </Select>
          </FormContainer>
        </Row>
        <Row>
          <FormContainer>
            <Text fontSize="20px">졸업 예정 연도 *</Text>
            <Input
              autocomplete="off"
              placeholder="2026년 2월"
              width="150px"
              value={answers[6]}
              onChange={(e) => handleInputChange(6, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
          <FormContainer>
            <Text fontSize="20px" marginLeft="178px">
              이메일 *
            </Text>
            <Input
              autocomplete="off"
              placeholder="sooklion@gmail.com"
              width="250px"
              value={answers[22]}
              onChange={(e) => handleInputChange(22, e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </FormContainer>
        </Row>
        <Row>
          <FormContainer>
            <Text fontSize="20px">프로그래머스 수강 여부 (선택)</Text>
            <Select
              width="125px"
              value={answers[7]}
              onChange={(e) => handleInputChange(7, e.target.value)}
            >
              <Option value="O">O</Option>
              <Option value="X">X</Option>
            </Select>
          </FormContainer>
          <FormContainer>
            <Text fontSize="20px" marginLeft="90px">
              프로그래머스 수강 인증 &nbsp;
              <ProLink
                style={{ fontWeight: "300" }}
                href="https://programmers.co.kr/learn/courses/2"
                target="_blank"
              >
                https://programmers.co.kr/learn/courses/2
              </ProLink>
              <span style={{ fontWeight: "300", fontSize: "15px" }}>
                - 1~11 강 *.zip 파일 1개 업로드 가능{" "}
              </span>
            </Text>
          </FormContainer>
        </Row>
        <Row>
          <FormContainer>
            <FileUploadContainer>
              {/*programmersImg*/}
              <FileInputLabel style={{ marginLeft: "30px" }}>
                {fileName ? fileName : "파일 업로드  +"}
                <FileInput
                  type="file"
                  multiple
                  onChange={handleImageUpload} // 파일 업로드 핸들러로 변경
                />
              </FileInputLabel>
              <SelectedFilesContainer>
                {selectedFiles.map((file, index) => (
                  <SelectedFile key={index}>{file.name}</SelectedFile>
                ))}
              </SelectedFilesContainer>
            </FileUploadContainer>
          </FormContainer>
        </Row>

        <Hr marginTop="70px" />
        {/* 질문과 답변 입력 */}
        {/* 6개 질문 answer 인덱스 8~13 */}
        {/*answerList의 a1~a6*/}
        {questions.common &&
          questions.common.map((question, index) => (
            <QuestionContainer key={index}>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
                fontSize="16px"
                marginTop="30px"
                marginLeft="30px"
              >
                {question}
                <Length fontSize="12px">
                  {answers[index + 8].length}/{maxLength}
                </Length>
              </Text>
              <Textarea
                value={answers[index + 8]}
                maxLength={maxLength}
                onChange={(e) => handleInputChange(index + 8, e.target.value)}
                placeholder="답변을 입력해 주세요."
              />
            </QuestionContainer>
          ))}

        {/* portfolio: answers[6] */}
        <QuestionContainer>
          <Text fontSize="18px" marginTop="30px" marginLeft="30px">
            7. 기술블로그, 포트폴리오, GitHub 등 자유롭게 URL 형식으로 제출해
            주세요. *선택
          </Text>
          <Textarea
            style={{ height: "100px" }}
            value={answers[14]}
            onChange={(e) => handleInputChange(14, e.target.value)}
            placeholder="URL을 입력해 주세요."
          />
        </QuestionContainer>
        <Hr marginTop="60px" marginBottom="30px" />
        <QuestionContainer>
          <Text fontSize="18px" marginTop="30px" marginLeft="30px">
            면접 가능 일자에 모두 체크해 주세요. *
          </Text>
          <CheckboxContainer>
            {scheduleData.map((schedule, index) => (
              <CheckboxLabel key={index}>
                <Checkbox
                  type="checkbox"
                  checked={checkboxValues[index]}
                  onChange={(e) =>
                    handleCheckboxChange(index, e.target.checked)
                  }
                />
                {schedule}
              </CheckboxLabel>
            ))}
          </CheckboxContainer>
        </QuestionContainer>

        <QuestionContainer>
          <Text
            fontSize="18px"
            marginTop="90px"
            marginLeft="30px"
            marginBottom="30px"
          >
            {required[0]}
          </Text>
          {required.slice(1, 7).map((text, index) => (
            <Text
              key={index}
              fontSize="18px"
              marginTop="3px"
              marginLeft="30px"
              style={{ fontWeight: "200" }}
            >
              {text}
            </Text>
          ))}
        </QuestionContainer>

        <QuestionContainer>
          <AgreeContainer>
            <AgreeLabel>
              <Agreebox
                type="checkbox"
                checked={answers[20]}
                onChange={(e) => handleInputChange(20, e.target.checked)}
              />
              위 내용을 확인하였습니다. (필수)
            </AgreeLabel>
          </AgreeContainer>
        </QuestionContainer>

        <QuestionContainer>
          <Textarea style={{ height: "200px" }} value={agree} />
        </QuestionContainer>

        <QuestionContainer>
          <AgreeContainer>
            <AgreeLabel>
              <Agreebox
                type="checkbox"
                checked={answers[21]}
                onChange={(e) => handleInputChange(21, e.target.checked)}
              />
              개인정보 수집 · 이용에 동의합니다. (필수)
            </AgreeLabel>
          </AgreeContainer>
        </QuestionContainer>

        <Hr marginBottom="20px" />

        {/* 개인 비밀번호 입력 */}
        <Row>
          <Text fontSize="18px" marginTop="30px" marginLeft="30px">
            서류전형, 면접전형 결과 조회 시 사용할 개인 비밀번호 4자리를 설정해
            주세요. *
            <br />
            <span style={{ color: "red", fontWeight: "200", marginTop: "7px" }}>
              *비밀번호 분실 시, 추후 결과 조회가 어려울 수 있으니 유의바랍니다.
            </span>
          </Text>
          {/* password: answers[19] */}
          <InputContainer>
            <PasswordInput
              autocomplete="off"
              type={showPassword ? "text" : "password"}
              value={answers[19]}
              onChange={(e) => handleInputChange(19, e.target.value)}
              placeholder="4자리 숫자 입력"
              maxLength="4"
            />
            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🔒" : "👁️"}
            </EyeIcon>
          </InputContainer>
        </Row>
        <Text fontSize="18px" marginTop="30px" marginLeft="30px">
          <span style={{ color: "red", fontWeight: "200", marginTop: "7px" }}>
            * ‘제출하기’ 버튼을 누른 후 랜딩되는 제출 완료 페이지를 시간이
            보이는 전체화면으로 꼭 캡쳐해주세요! <br />
            추후 서류 누락으로 서류 면접에 불이익 발생 시, 증빙자료로 인정될 수
            있습니다.
          </span>
        </Text>
        {!submitted && (
          <SubmitButtonContainer>
            <SubmitButton type="submit">제출하기</SubmitButton>
          </SubmitButtonContainer>
        )}
      </form>
    </>
  );
};

export default Question;

const Hr = styled.hr`
  border: 1px solid #ffffff;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  width: 100%;
`;

const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  line-height: 28px;
`;

const Textarea = styled.textarea`
  margin: 20px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 10px;
  width: 1000px;
  height: 200px;
  resize: vertical;
  background: #111111;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  padding: 10px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const SubmitButton = styled.button`
  font-size: 22px;
  padding: 15px;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  color: #111111;
  border-radius: 17px;
  font-weight: 600;
  width: 220px;
  border: none;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: flex-start;
  width: 700px;
  margin-left: 25px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  padding: 3px;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  flex-basis: calc(50% - 20px);
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 200;

  input[type="checkbox"] {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    appearance: none;
    border: 1px solid #ffffff;
    background: #ffffff;
    outline: none;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background: #ffb666;
    border: 1px solid #ffffff;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  font-size: 18px;
  background: #111111;
  border-radius: 13px;
  color: white;
  border: 1px solid #ffffff;
  width: ${(props) => props.width};
  padding: 5px;
  padding-left: 12px;
  height: 36px;
  margin-top: 20px;
  margin-right: ${(props) => props.marginRight};
  margin-left: 30px;
  ::placeholder {
    color: #9e9e9e;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  padding-right: 30px;
  width: 60%;
  box-sizing: border-box;
  font-size: 18px;
  background: #111111;
  border-radius: 13px;
  color: white;
  border: 1px solid #ffffff;
  padding: 5px;
  padding-left: 12px;
  height: 36px;
  margin-top: 28px;
  margin-left: 20px;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 110px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 17px;

  @media (max-width: 480px) {
    position: absolute;
    top: 30%;
    right: 110px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 17px;
  }
`;

const PartText = styled.div`
  font-size: 36px;
  font-weight: 700;
  background-image: url(${(props) => props.background});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 0% 90%;
  height: 52px;
  margin-top: 120px;
`;

const TitleText = styled.div`
  font-size: 36px;
  font-weight: 700;
  height: 52px;
  margin-top: 120px;
`;

const Img = styled.img`
  width: 300px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Select = styled.select`
  padding: 5px;
  padding-left: 10px;
  width: ${(props) => props.width};
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 20px;
  color: #ffffff;
  background: #111111;
  margin-left: 25px;
  margin-top: 5px;
`;

const Option = styled.option`
  font-size: 25px;
  color: #111111;
  background: #ffffff;
`;

const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 468px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  cursor: pointer;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 20px;
  color: #111111;
  background: #ffffff;
  margin-left: 25px;
`;

const SelectedFilesContainer = styled.div`
  margin-top: 10px;
`;

const SelectedFile = styled.div`
  margin-top: 5px;
`;

const ProLink = styled.a`
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: flex-start;
  width: 700px;
  margin-left: 25px;
`;

const AgreeLabel = styled.label`
  display: flex;
  padding: 3px;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 200;

  input[type="checkbox"] {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    appearance: none;
    border: 1px solid #ffffff;
    background: #ffffff;
    outline: none;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background: #ffb666;
    border: 1px solid #ffffff;
  }
`;

const Agreebox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

const Length = styled.span`
  font-size: 12px;
  padding: 10px;
  color: #ffb666;
`;
