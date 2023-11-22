import React from 'react';
import meImage from '../me.png';
import "../App.css";

export default function Header() {
    return (
        <>
            <img src={meImage} alt="Dimitry AUJOUR" className={"profile"}/>
            <h1>Dimitry AUJOUR</h1>
            <h2>Web Developer</h2>
            <button> <a href={"https://www.linkedin.com/in/dimitry-aujour-34440911b/"} className="button-link">Linkedin</a> </button>
            <button><a href="mailto:Dimitry.Aujour@gmail.com" className="button-link">Email Me</a></button>

        </>
    );
}
