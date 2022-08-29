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

let task_dt=[
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
    const [tasks,setTasks] = useState([]);      //这里的state的初始值应该放[],否则要map list会出现type error
    // console.log(selectedProject);
    // const test = makeList({selectedProject})

    useEffect(()=>{
        const getData = ()=>{
            // console.log(taskdata);
            for(let i=0;i< loadData.length;i++){
                // console.log(loadData);
                if(loadData[i]["project_name"] === selectedProject){
                    // console.log(loadData[i]["tasks"]);
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
    },[loadData])              //useContext传进来的loadData是一个state,state每次改变都要re-render。这个task页面更新是靠context传进来的值更新的，而不是自动加载。
      
    return(
        <div className="tasks-content">
            <h1 className="task-selected">
                {/* <span>Test</span> */}
                {selectedProject}
            </h1>
            <ul>
                {
                tasks.map((task,index) =>
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