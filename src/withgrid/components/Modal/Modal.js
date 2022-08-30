import React, { useContext,useEffect,useState} from 'react';
import ReactDOM from "react-dom";
import "./Modal.scss";
import SelectedProjectContext from '../../context/SelectedProjectContext'
import Close from "../../../imgs/times-solid.svg";
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001';

const modalContainer = document.querySelector("#modal");

const Modal = ({ show, close ,title, currentProjectId}) => {
  let {selectedProject,setSelectedProject} = useContext(SelectedProjectContext);
  // const [updatedata,setUpdatedata] =useState(false);
  const [addproject,setAddproject] =useState(false);
  const [updatedata,setUpdatedata] =useState(false); 
  const [submitInput,setSubmitInput] = useState('');

  // useEffect(()=>{
  //   const addProject = async()=>{
  //     await axios.add(`/api/projects`)
  //   }
  //   if(addproject){
  //       addProject();
  //   }
  // },[addproject])

  useEffect(()=>{
    const updateData = async()=>{
      console.log(`${currentProjectId},${selectedProject}`);
      await axios.put(`/api/projects/?id=${currentProjectId}`,{project_name:selectedProject})
      // console.log("test through2");
      // console.log(`${currentProjectId},${updatedata}`)
    }
    if(updatedata){
      updateData();
    }
  },[updatedata])


  useEffect(()=>{
    const addProject = async()=>{
      console.log("passthrough");
      await axios.post(`/api/projects`,{project_name:selectedProject})
    }
    if(addproject){
      addProject();
    }
  },[addproject])

  return(
     show ?
      ReactDOM.createPortal(
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">
            <label className="modal_content-label">New Department:</label>
            <input className="modal_content-input" type="text" value={title} onChange= {e=>{setSubmitInput(e.target.value);console.log(submitInput)}}></input>
            {/* <input className="modal_content-input" type="text" value={title}></input> */}

          </main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
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
                  setSelectedProject(submitInput);
                  close();
                  window.location.reload();
                  }
                  }>
                    Submit
            </button>
          </footer>
        </div>
      </div>,
      modalContainer
      )
      : null
  )
}

export default Modal;