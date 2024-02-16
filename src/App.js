import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Common/NavBar';

import NonRecruit from './Recruitment/NonRecruit';
import Recruit from './Recruitment/Recruit';

import SubmitSuccess from './Recruitment/SubmitSuccess';
import SubmitFail from './Recruitment/SubmitFail';

import FirstRecruit from './Recruitment/FirstRecruit';
import FirstVerification from './Recruitment/FirstVerification';
import FirstResult from './Recruitment/FirstResult';

import FinalRecruit from './Recruitment/FinalRecruit';
import FinalVerification from './Recruitment/FinalVerification';
import FinalResult from './Recruitment/FinalResult';

import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import { ThemeProvider, styled } from 'styled-components';
import Footer from './components/Common/Footer';
import Makers from './components/Makers';
import AboutUs from './pages/AboutUs';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ApplyPage from './Recruitment/ApplyPage';
import Project from './pages/Project';
import ProjectForm from './Recruitment/ProjectForm';

const Div = styled.div`
  margin-top: 120px;
`;
function App() {
  const LayOut = (Component) => (
    <>
      <NavBar />
      <Div>
        <Component />
      </Div>
      <Footer />
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <Routes>
            <Route path="*" element={LayOut(NotFound)} />
            <Route path="/" element={LayOut(Landing)} />
            <Route path="/home" element={LayOut(AboutUs)} />
            <Route path="/project" element={LayOut(Project)} />
            <Route path="/recruitment" element={LayOut(Recruit)/*[--] Recruit 앞 부분 수정하기*/}
            /* Recruit(리쿠르팅 중) or NonRecruit(리쿠르팅 기간 X) or FirstRecruit(1차 서류 발표 이후) or FinalRecruit(최종 발표 이후) 변경 *//> 
            <Route path="/recruitment/:part" element={<ApplyPage />} />
            <Route
              path="/recruitment/submit-success"
              element={<SubmitSuccess />}
            />
            <Route path="/recruitment/submit-fail" element={<SubmitFail />} />
            <Route /* 1차 발표 때 FirstVerification, 최종 발표 때 FinalVerification */
              path="/recruitment/result-verification"
              element={<FinalVerification />}
            />
            <Route path="/contact" element={LayOut(Contact)} />
            <Route path="/makers" element={LayOut(Makers)} />
            {/*<Route path="/form" element={<ProjectForm projectId={1}/>} />*/}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
