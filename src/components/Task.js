import styled from 'styled-components'
import { useContext } from 'react'
import SelectedTaskContext from '../context/SelectedTaskContext'
const Office=['Office1','Office2','Office3']
const Daily =['Daily1','Daily2','Daily3']
const Future=['Future1','Future2','Future3']
const Words =['Words1','Words2','Words3']
const Music=['Music1','Music2','Music3']
// const selectedTask = "Test2"

const H1 = styled.h1`
    position:absolute;
    left: 40%;
    top: 10%;
    font-size:50px;
`

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
        <div>
            <H1>
                {/* <span>Test</span> */}
                {selectedTask}
            </H1>
            <ul>
                {
                test.map((task,index) =>
                     <li key={index}>{task}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default Tasks;