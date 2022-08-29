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
    const [tasks,setTasks] = useState(null);
    // console.log(selectedProject);
    // const test = makeList({selectedProject})

    // let tasks;
    // console.log(loadData);
    // console.log(loadData[0]["project_name"]);
    // console.log(selectedProject);
    // useEffect(()=>{
    //     const fetchData = async()=>{ 
    //         for(let i=0;i< loadData[i].length;i++){
    //             if(loadData[i]["project_name"] === selectedProject){
    //                 setTasks(loadData[i]['tasks']);
    //             }
    //         }
    //     }
    //     fetchData().catch((err)=>{
    //         console.log(err);
    //       });
    //     // console.log(tasks);
    //   },[])

    // useEffect(()=>{
    // async function run(){
    //     try{
    //         for(let i=0;i< loadData.length;i++){
    //         if(loadData[i]["project_name"] === selectedProject){
    //             setTasks(loadData[i]['tasks']);
    //         }
    //     }
    //        }catch(error){
    //         console.log(error);
    //        }
    //     }
    // run();
    // },[selectedProject])


    useEffect(()=>{
    function run(){
        try{
            for(let i=0;i< loadData.length;i++){
            if(loadData[i]["project_name"] === selectedProject){
                setTasks(loadData[i]['tasks']);
            }
        }
           }catch(error){
            console.log(error);
           }
        }
    run();
    },[selectedProject])
      
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