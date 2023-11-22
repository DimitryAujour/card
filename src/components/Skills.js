import React from 'react';

const Skills = () => {
    const languages = ['JavaScript', 'Python', 'React','NodeJs','Grahphql']; // Add your languages here
    return (
        <div className="skills">
            <h2>Programming Languages</h2>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
        </div>
    );
};

export default Skills;
