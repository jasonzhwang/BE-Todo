import './AddProject.scss'
import {useState,useEffect} from 'react'

const AddProject = () => {
    return(
        <div
            className="add-project"
            role="button"
        >
            <span className="add-project__plus">+</span>
            <span className="add-project__text">Add Project</span>
        </div>
    )
}

export default AddProject;