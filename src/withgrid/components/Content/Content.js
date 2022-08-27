import React,{useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Tasks from '../Task';
import styled from 'styled-components'
import {SelectedProjectProvider} from '../../context/SelectedProjectContext';
import '../Content/Content.scss'

// const ContentWrapper =  styled.section`
//   display: grid;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//         align-items: center;
//   grid-template-columns: 1fr auto;
//   max-width: 922px;
//   margin: auto;
// `

const Content = () =>  {
    const [selectedProject,setSelectedProject] = useState("");
    // const getSelected = (e) =>{
    //   setSelectedTask(e);
    // }

    return(
    <section className="main">
      {/* <Sidebar /> */}
      {/* <Sidebar selectedTask={selectedTask} setSelectedTask={setSelectedTask} getSelected={getSelected}/>
      <Tasks selectedTask={selectedTask} setSelectedTask={setSelectedTask}/> */}
      <SelectedProjectProvider value={{selectedProject, setSelectedProject}}>
        <Sidebar />
        <Tasks />
      </SelectedProjectProvider>
    </section>
    )
}

export default Content;