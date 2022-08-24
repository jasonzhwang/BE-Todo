// import styled from 'styled-components'
import { useContext } from 'react'
import '../withgrid/Task.scss'
import SelectedTaskContext from '../context/SelectedTaskContext'

const task_dt=[
'This application a Todoist clone was built using create-react-app as a base',
'the technologies used were React (Custom Hooks, Context), Firebase & React Testing Library',
'hoping this gives people a better understanding of React',
'Ive also included SCSS in this tutorial',
'the main focus is to build a real application using React',
'If you clone this application, click the Pizza icon on the top right',
'it enables dark mode'
]
// const selectedTask = "Test2"

// const H1 = styled.h1`
//     position:absolute;
//     left: 40%;
//     top: 10%;
//     font-size:50px;
// `

const makeList = (name)=>{
    name = [];
    return name;
  }

const Tasks = () => {
// const Tasks = ({selectedTask}) => {
    // console.log("selectedTask in details",selectedTask);

    let {selectedTask,setSelectedTask} = useContext(SelectedTaskContext);
    const test = makeList({selectedTask})
    console.log(test)
    return(
        <div className="">
            <h1 className="task-selected">
                {/* <span>Test</span> */}
                {selectedTask}
            </h1>
            <ul>
                {
                task_dt.map((task,index) =>
                     <li key={index}>{task}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default Tasks;