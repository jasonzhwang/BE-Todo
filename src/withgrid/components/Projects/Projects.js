import React, { useState,useContext,useEffect } from 'react';
// import styled from 'styled-components'
import AddProject from '../AddProject/AddProject'
import SelectedTaskContext from '../../context/SelectedTaskContext'
import '../Projects/Projects.scss'
import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.baseURL = 'http://127.0.0.1:3001';

const projects = ['👏THE OFFICE','🚀DAILY','🎯FUTURE','📚WORDS','🎵MUSIC'];

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

// const loadDataOnlyOnce = () => {
//   console.log("Hello kapil")
// }
  
// // This function will called only once
// useEffect(() => {
//   loadDataOnlyOnce();
// }, [])

useEffect(()=>{
  console.log('test useeffect')
  const fetchData = async()=>{
    await axios.get('/api/projects')
    .then((response)=>{
      console.log(response.data);
      setData(response.data)
    }).catch((err)=>{
      console.log(err);
    })
      // .then(res=>{
      //   console.log(res);
      //   setData(res.data);
      // })
      // setData(response.data)
  }
  fetchData();
},[])

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