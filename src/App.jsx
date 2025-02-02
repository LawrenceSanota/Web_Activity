import React from "react";
import "./App.css";

function App() {
  const user = {
    image: "/img/profile.jpg", // Make sure the path is correct
    name: "Lawrence Sanota",
    bio: "A passionate web developer who loves creating beautiful UIs.",
    email: "lawrencesanota@gmail.com",
    phone: "09207164330",
    address: "Cumadcad, Castilla, Sorsogon",
    skills: ["JavaScript", "C++", "CSS", "HTML"],
    jobs: [
      {
        title: "Frontend Developer",
        company: "Tech Corp",
        startDate: "Jan 2020",
        endDate: "Present",
        description: "Developing and maintaining the front end of the company website.",
      },
      {
        title: "Web Developer",
        company: "Web Solutions",
        startDate: "Jun 2018",
        endDate: "Dec 2019",
        description: "Worked on various web development projects for clients.",
      }
    ]
  };

  return (
    <div className="container">
      <div className="profile">
        <img src={user.image} alt="Profile" className="Pic" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>

      <div className="section">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        {user.jobs.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.title} at {job.company}</h3>
            <p><strong>{job.startDate} - {job.endDate}</strong></p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
