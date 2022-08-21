import React, { useState,useContext,useEffect } from 'react';
// import styled from 'styled-components'
import AddProject from '../AddProject/AddProject'
import SelectedProjectContext from '../../context/SelectedProjectContext'
import '../Projects/Projects.scss'
// import ModalDialog from '../ModalDialog'
import Modal from '../Modal'
import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001';

// const projects = ['👏THE OFFICE','🚀DAILY','🎯FUTURE','📚WORDS','🎵MUSIC'];
const projects = [];

const Projects = () => {
// const Projects = ({selectedTask,getSelected,setSelectedTask}) => {
let {selectedProject,setSelectedProject} = useContext(SelectedProjectContext);
const [currentProjectId,setCurrentProjectId] = useState();
const [data,setData] = useState();
const [deldata,setDeldata] =useState(false);

const [modal, setModal] = useState(false);
const Toggle = () => setModal(!modal);

useEffect(()=>{
  const fetchData = async()=>{
    await axios.get('/api/projects')
    .then((response)=>{
      // console.log(response.data);
      setData(response.data)
      for(let i=0;i<response.data.length;i++){
        // console.log(response.data[i]["project_name"]);
        projects.push(response.data[i]["project_name"]);
        }
    }).catch((err)=>{
      console.log(err);
    })
  }
  fetchData();
},[])


useEffect(()=>{
  const delData = async()=>{
    await axios.delete(`/api/projects/?id=${deldata}`)
  }
  if(deldata){
    delData();
  }
},[deldata])

  return (
    <>
    <ul className="projects">
        {
        projects.map((project,index) => 
        <li className="Project" key={index} onClick={()=>{selectedProject=project;setSelectedProject(project);}}>
        {/* <Styledli key={index} onClick={()=>{selectedTask=project; getSelected(project);setSelectedTask(selectedTask);console.log(selectedTask)}}> */}

            {/* <IndividualProject name={project}/> */}
            <div>
            <span className="dot">•</span>
            <h2 className="projectName">{project}</h2>
            <div display="flex" >
              <span className="edit" onClick={() => {Toggle(); setCurrentProjectId(data[index]["_id"]);}}><FiEdit /></span>
              <Modal show={modal} close={()=>Toggle()} title={selectedProject} currentProjectId = {currentProjectId}/>
              {/* <ModalDialog updatedata={updatedata} setUpdatedata={setUpdatedata}/> */}
              <span className="delete" onClick={()=>{setDeldata(data[index]["_id"]);window.location.reload();}}><TiDeleteOutline /></span>              
              {/* <span className="delete" onClick={()=>{console.log(data[index]["_id"])}}><TiDeleteOutline /></span> */}
            </div>
            </div>
        </li>
        )
        }
    </ul>
    <AddProject />
    </>
  );
};

export default Projects;