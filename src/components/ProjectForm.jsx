import React, { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    bgImg: "",
    content: "",
    gitBeUrl: "",
    gitFeUrl: "",
    servIntro: "",
    servLaunch: "",
    summary: "",
    teamMember: "",
    teamName: "",
    title: "",
    year: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        const response = await axios.put(
          `${process.env.REACT_APP_API_ROOT}/api/project/${formData.id}`,
          formData
        );
        console.log("Update Response:", response.data);
      } else {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ROOT}/api/project`,
          formData
        );
        console.log("Create Response:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_ROOT}/api/project/${formData.id}`,
        formData
      );
      console.log("Update Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Project ID (for Update)"
        />
        <input
          type="text"
          name="bgImg"
          value={formData.bgImg}
          onChange={handleChange}
          placeholder="Background Image URL"
        />
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
        />
        <input
          type="text"
          name="gitBeUrl"
          value={formData.gitBeUrl}
          onChange={handleChange}
          placeholder="Backend Git URL"
        />
        <input
          type="text"
          name="gitFeUrl"
          value={formData.gitFeUrl}
          onChange={handleChange}
          placeholder="Frontend Git URL"
        />
        <input
          type="text"
          name="servIntro"
          value={formData.servIntro}
          onChange={handleChange}
          placeholder="Service Introduction"
        />
        <input
          type="text"
          name="servLaunch"
          value={formData.servLaunch}
          onChange={handleChange}
          placeholder="Service Launch"
        />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Summary"
        />
        <input
          type="text"
          name="teamMember"
          value={formData.teamMember}
          onChange={handleChange}
          placeholder="Team Member"
        />
        <input
          type="text"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          placeholder="Team Name"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Year"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ProjectForm;
