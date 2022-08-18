import React, { useState,useContext,useEffect } from 'react';
// import styled from 'styled-components'
import AddProject from '../AddProject/AddProject'
import SelectedTaskContext from '../../context/SelectedTaskContext'
import '../Projects/Projects.scss'
// import ModalDialog from '../ModalDialog'
import Modal from '../Modal'
import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001';

// const projects = ['👏THE OFFICE','🚀DAILY','🎯FUTURE','📚WORDS','🎵MUSIC'];
const projects = [];

// const Styleddot = styled.span`
//     margin-right: 10px;
//     font-size: 30px;
// `

// const Styledul = styled.ul`
// // margin-top: 20px;
// // margin-bottom: 20px;
// // display: -webkit-box;
// // display: -ms-flexbox;
// // display: flex;
// // flex-direction: column;
// // border-bottom: 1px solid #f1f1f1;;
// // padding-left: 10px;
// // cursor: pointer;
// `
// const Styledli = styled.li`
//     display:flex;
//     align-items: center;
//     list-style-type: none;
//     color: #333;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     cursor: pointer;
//     line-height: 1.50;
//     font-size: 15px;
//     padding-left: 0;
//     padding-right: 0;
//     :nth-child(1) ${Styleddot}{
//         color: #6accbc;
//     }
//     :nth-child(2) ${Styleddot}{
//         color: #fad003;
//     }
//     :nth-child(3) ${Styleddot}{
//         color: #ff8d85;
//     }
//     :nth-child(4) ${Styleddot}{
//         color: #ff9932;
//     }
//     :nth-child(5) ${Styleddot}{
//         color: #af38eb;
//     }
// `

// const Styledul = styled.ul`
//     ${Styledli}:nth-child(1)${Styledspan}{
//         color: #6accbc;
//     }
// `

// const Styledh2 = styled.h2`
//     padding-left: 1rem;
//     margin: 0;
//     color: #333;
//     font-size: 15px;
// `

const Projects = () => {
// const Projects = ({selectedTask,getSelected,setSelectedTask}) => {
let {selectedTask,setSelectedTask} = useContext(SelectedTaskContext);
const [data,setData] = useState();
const [updatedata,setUpdatedata] =useState(false);
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
        <li className="Project" key={index} onClick={()=>{selectedTask=project;setSelectedTask(project);}}>
        {/* <Styledli key={index} onClick={()=>{selectedTask=project; getSelected(project);setSelectedTask(selectedTask);console.log(selectedTask)}}> */}

            {/* <IndividualProject name={project}/> */}
            <div>
            <span className="dot">•</span>
            <h2 className="projectName">{project}</h2>
            <div display="flex" >
              <span className="clickme" onClick={() => Toggle()}><FiEdit /></span>
              <Modal show={modal} />
              {/* <ModalDialog updatedata={updatedata} setUpdatedata={setUpdatedata}/> */}
              <span className="delete" onClick={()=>{setDeldata(data[index]["_id"])}}><TiDeleteOutline /></span>              
              {/* <span className="delete" onClick={()=>{console.log(data[index]["_id"])}}><TiDeleteOutline /></span> */}
            </div>
            </div>
            {/* <span
                tabIndex={0}
                role="button"
            >
                <FaTrashAlt />
            </span> */}
        </li>
        )
        }
    </ul>
    <AddProject />
    </>
  );
};

export default Projects;