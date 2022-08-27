// import styled from 'styled-components'
import { useContext,useState } from 'react'
// import Checkbox from '../Checkbox/index'
import AddTask from '../AddTask/index'
import './Task.scss'
import TaskModal from '../TaskModal'
import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import SelectedProjectContext from '../../context/SelectedProjectContext'

const task_dt=[
'task1',
'task2',
'task3',
'task4',
'task5',
'task6'
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
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    let {selectedProject,setSelectedProject} = useContext(SelectedProjectContext);
    const test = makeList({selectedProject})
    return(
        <div className="tasks-content">
            <h1 className="task-selected">
                {/* <span>Test</span> */}
                {selectedProject}
            </h1>
            <ul>
                {
                task_dt.map((task,index) =>
                     <li key={index}>
                         <div>
                            {/* <Checkbox /> */}
                            <div className="number_sign">{index+1}</div>
                            <span className="tasktext">{task}</span>
                            <div>
                                <span className="edit" onClick={() => {Toggle();}}><FiEdit /></span>
                                <TaskModal show={modal} close={()=>Toggle()}/>
                                <span className="delete"><TiDeleteOutline /></span>    
                            </div>
                         </div>
                     </li>
                    )
                }
            </ul>
            <AddTask />
        </div>
    )
}
export default Tasks;