import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Tasks from '../Task';
import styled from 'styled-components'
import {SelectedTaskProvider} from '../../context/SelectedTaskContext';
import '../gridlayout/Content.scss'

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
    const [selectedTask,setSelectedTask] = useState("OFFICE");
    // const getSelected = (e) =>{
    //   setSelectedTask(e);
    // }

    return(
    <section className="content-container">
      {/* <Sidebar /> */}
      {/* <Sidebar selectedTask={selectedTask} setSelectedTask={setSelectedTask} getSelected={getSelected}/>
      <Tasks selectedTask={selectedTask} setSelectedTask={setSelectedTask}/> */}
      <SelectedTaskProvider value={{selectedTask, setSelectedTask}}>
        <Sidebar />
        <Tasks />
      </SelectedTaskProvider>
    </section>
    )
}

export default Content;