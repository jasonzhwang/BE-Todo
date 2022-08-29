// import styled from 'styled-components'
import { useContext,useState, useEffect } from 'react'
// import Checkbox from '../Checkbox/index'
import AddTask from '../AddTask/index'
import './Task.scss'
import TaskModal from '../TaskModal'
import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import SelectedProjectContext from '../../context/SelectedProjectContext';
import LoadDataContext from '../../context/LoadDataContext'

const task_dt=[
// 'task1',
// 'task2',
// 'task3',
// 'task4',
// 'task5',
// 'task6'
]
// const selectedTask = "Test2"

// const H1 = styled.h1`
//     position:absolute;
//     left: 40%;
//     top: 10%;
//     font-size:50px;
// `

// const makeList = (name)=>{
//     name = [];
//     return name;
//   }
const Tasks = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    let {selectedProject} = useContext(SelectedProjectContext);
    let {loadData,setLoadData} = useContext(LoadDataContext);
    const [tasks,setTasks] = useState();
    // console.log(selectedProject);
    // const test = makeList({selectedProject})

    const taskdata = loadData;
    console.log(taskdata)
    useEffect(()=>{
        const getData = ()=>{
            console.log(loadData);
            for(let i=0;i< 3;i++){
                // console.log(loadData);
                if(loadData[i]["project_name"] === selectedProject){
                    return loadData[i]['tasks'];
                }
            }
        }
        const fetchMyAPI = async()=>{
            const data = await getData();
            console.log(data)
            setTasks(data);
        }
        fetchMyAPI();
        console.log(tasks);
    },[])

    function useEffect(loadDa)
      
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