import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;


const ProjectCard = ({ project, onClick }) => {
  const { bgImg, title, no, year, summary } = project;

  return (
    <Card onClick={() => onClick(project)}>
        {bgImg
        ? <CardImage src={bgImg} alt={title} />
        : <CardImage />
        }
      <CardContent>
        <CardText fontSize="3.5vw" fontWeight="bolder">{title}</CardText>
        <CardText fontSize="2.5vw" fontWeight="bold">{`${no} | ${year}`}</CardText>
        <CardText fontSize="2.3vw" fontWeight="lighter">{summary}</CardText>
        <Detail>상세보기 🔍</Detail>
      </CardContent>
    </Card>
  );
};


const Project = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/project`);
          const data = await response.json();
          setProjects(data.result);
          console.log(data.result);
        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };
  
      fetchData();
    }, []);
  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };


  return (
    <Layout>
      <Container>
        <BannerContainer>
          <Text fontSize="4vw" MobilefontSize="22px" fontWeight="bolder" marginLeft="10vw" marginTop="10vw">내 아이디어를</Text>
          <Text fontSize="4vw" MobilefontSize="22px" fontWeight="bolder" marginLeft="10vw" marginTop="2vw">내 손으로 실현한다</Text>
          <Text fontSize="2.2vw" MobilefontSize="11px" fontWeight="lighter" marginLeft="10vw" marginBottom="10vw" marginTop="4.3vw">숙명여대 멋쟁이사자처럼 팀원들의 프로젝트를 둘러보세요.</Text>
        </BannerContainer>
        {projects.map((project) => (
        <ProjectCard
          key={project.projectId}
          project={project}
          onClick={() => openModal(project.projectId)}
        />
      ))}
      {selectedProjectId && (
        <Modal projectId={selectedProjectId} onClose={closeModal} />
      )}
      </Container>
    </Layout>
  );
};

export default Project;


const Layout = styled.div`
  display: flex;
  background-color: #111111;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5vw;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #111111;
  color: white;
  width: 100%;
  margin-top: -70px;

  @media (max-width: 480px) {
    margin-top: -150px;
  }

`;


const Text = styled.div`
  color: #000;
  text-shadow: 0px 0.5vw 1.25vw rgba(0, 0, 0, 0.25);
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  align-items: left;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media (max-width: 480px) {
    font-size: ${(props) => props.MobilefontSize};
  }
`;

const BannerContainer = styled.div`
    align-items: left;
    width: 100%;
    background-image: url('ProjectBanner.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
`;

const Card = styled.div`
  flex: 0 0 calc(45% - 3.5vw);
  width: 45%;
  background-color: #F8DBBB;
  border-radius: 2.5vw;
  overflow: hidden;
  box-shadow: 0px 0.5vw 1.25vw rgba(0, 0, 0, 0.25);
  margin-top: 5.5vw;
  cursor: pointer;
`;

/*
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  background-color: #EB9537;
`;
*/

const CardImage = styled.div`
  width: 100%;
  height: 20vw;
  object-fit: cover;
  border-radius: 2.5vw;
  background-color: #EB9537;
`;

const CardContent = styled.div`
  padding: 1.8vw;
`;

const CardText = styled.div`
  color: #000000;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: 0.5vw;
  padding: 0.5vw;
  line-height: 2.8vw;
`;

const Detail = styled.div`
  border-radius: 3vw;
  background-color: #EB9537;
  color: #000000;
  font-size: 3vw;
  font-weight: 700;
  text-align: center;
  padding: 1.2vw;
  margin-top: 3vw;
`;