import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: "Python", level: 68 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "CSS", level: 70 },
        { name: "Pandas", level: 90 },
        { name: "React.js", level: 50 },
        { name: "HTML", level: 60 },
        { name: "Mathematica", level: 85 },
        { name: "Git", level: 65 },
        { name: "LaTeX", level: 80 },
    ];

    const getColor = (level) => {
        const red = Math.round((100 - level) * 2.55);
        const green = Math.round(level * 2.55);
        return `rgb(${red}, ${green}, 0)`;
    };

    return (
        <div>
            <div className="skill" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontSize: '50px', color: "#f0f0f0"}}>My Skills</h1>
            </div>
            {skills.map((skill, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "35px" }}>
                    <div style={{ width: "100px", marginRight: "10px", color:'white', fontSize: "15px", }}>
                        {skill.name}
                    </div>
                    <div
                        style={{
                            width: "200px",
                            height: "10px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "5px",
                            marginRight: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: `${skill.level}%`,
                                height: "100%",
                                backgroundColor: getColor(skill.level),
                                borderRadius: "5px",
                                marginRight: "10px",
                            }}
                        >
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;

