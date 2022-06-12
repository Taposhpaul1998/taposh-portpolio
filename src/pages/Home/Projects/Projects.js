import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card/Card';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const hendelDetels = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div id='project' className='projects top'>
            <div className="conteiner">
                <h2 className='section_title '>My Projects</h2>
                <div className="conteiner_grid">
                    {
                        projects.map(project => <Card
                            key={project._id}
                            project={project}
                            hendelDetels={hendelDetels}
                        ></Card>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Projects;