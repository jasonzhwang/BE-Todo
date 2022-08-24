import './AddProject.scss'
import Modal from '../Modal'
import {useState,useEffect} from 'react'

const AddProject = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    return(
        <div
            className="add-project"
            role="button"
            onClick={()=>setModal(true)}
        >
            <span className="add-project__plus">+</span>
            <span className="add-project__text">Add Department</span>
            <Modal show={modal} close={()=>Toggle()}/>
        </div>
    )
}

export default AddProject;