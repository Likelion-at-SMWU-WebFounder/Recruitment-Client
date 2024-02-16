import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    id: '', // 추가: 프로젝트의 ID
    bgImg: '',
    content: '',
    gitBeUrl: '',
    gitFeUrl: '',
    servIntro: '',
    servLaunch: '',
    summary: '',
    teamMember: '',
    teamName: '',
    title: '',
    year: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ID를 가지고 있는 경우 PUT 요청을 보냅니다.
      if (formData.id) {
        const response = await axios.put(`http://52.79.255.210:8080/api/project/${formData.id}`, formData);
        console.log('Update Response:', response.data);
      } else {
        // ID가 없는 경우에는 새로운 프로젝트를 생성하는 POST 요청을 보냅니다.
        const response = await axios.post('http://52.79.255.210:8080/api/project', formData);
        console.log('Create Response:', response.data);
      }
      // 처리 완료 후 필요한 작업 수행
    } catch (error) {
      console.error('Error:', error);
      // 에러 처리
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://52.79.255.210:8080/api/project/${formData.id}`, formData);
      console.log('Update Response:', response.data);
      // 처리 완료 후 필요한 작업 수행
    } catch (error) {
      console.error('Error:', error);
      // 에러 처리
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Project ID (for Update)" />
        <input type="text" name="bgImg" value={formData.bgImg} onChange={handleChange} placeholder="Background Image URL" />
        <input type="text" name="content" value={formData.content} onChange={handleChange} placeholder="Content" />
        <input type="text" name="gitBeUrl" value={formData.gitBeUrl} onChange={handleChange} placeholder="Backend Git URL" />
        <input type="text" name="gitFeUrl" value={formData.gitFeUrl} onChange={handleChange} placeholder="Frontend Git URL" />
        <input type="text" name="servIntro" value={formData.servIntro} onChange={handleChange} placeholder="Service Introduction" />
        <input type="text" name="servLaunch" value={formData.servLaunch} onChange={handleChange} placeholder="Service Launch" />
        <input type="text" name="summary" value={formData.summary} onChange={handleChange} placeholder="Summary" />
        <input type="text" name="teamMember" value={formData.teamMember} onChange={handleChange} placeholder="Team Member" />
        <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name" />
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ProjectForm;
