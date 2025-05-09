import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'Git',
        'TypeScript',
        'Redux',
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Skills</h1>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;