import React, { useContext,useState} from 'react';
import ReactDOM from "react-dom";
import "./TaskModal.scss";
import SelectedProjectContext from '../../context/SelectedProjectContext'
import Close from "../../../imgs/times-solid.svg";
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001';

const TaskmodalContainer = document.querySelector("#taskmodal");

const TaskModal = ({ show, close ,title, currentProjectId}) => {
  let {selectedProject,setSelectedProject} = useContext(SelectedProjectContext);
  const [updatedata,setUpdatedata] =useState(false);
  const [addproject,setAddproject] =useState(false);
  // const [updatedata,setUpdatedata] =useState(false); 

  // useEffect(()=>{
  //   const updateData = async()=>{
  //     console.log(`${currentProjectId},${selectedProject}`);
  //     await axios.put(`/api/projects/?id=${currentProjectId}`,{project_name:selectedProject})
  //     // console.log("test through2");
  //     // console.log(`${currentProjectId},${updatedata}`)
  //   }
  //   if(updatedata){
  //     updateData();
  //   }
  // },[updatedata])


  // useEffect(()=>{
  //   const addProject = async()=>{
  //     console.log("passthrough");
  //     await axios.post(`/api/projects`,{project_name:selectedProject})
  //   }
  //   if(addproject){
  //     addProject();
  //   }
  // },[addproject])

  return(
     show ?
      ReactDOM.createPortal(
      <div
        className="TaskmodalContainer"
        onClick={() => close()}
      >
        <div className="Taskmodal" onClick={(e) => e.stopPropagation()}>
          <header className="Taskmodal_header">
            <h2 className="Taskmodal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="Taskmodal_content">
            <label className="Taskmodal_content-label">New Task:</label>
            <input className="Taskmodal_content-input" type="text" value={title} onChange= {e=>{setSelectedProject(e.target.value);console.log(selectedProject)}}></input>
          </main>
          <footer className="Taskmodal_footer">
            <button className="Taskmodal-close" onClick={() => close()}>
              Cancel
            </button>

            <button className="submit" 
                onClick={
                  ()=>{
                  if(currentProjectId){
                  setUpdatedata(true);}
                  else{
                    setAddproject(true)
                  }
                  setSelectedProject(selectedProject);
                  close();
                  window.location.reload();
                  }
                  }>
                    Submit
            </button>
          </footer>
        </div>
      </div>,
      TaskmodalContainer
      )
      : null
  )
}

export default TaskModal;