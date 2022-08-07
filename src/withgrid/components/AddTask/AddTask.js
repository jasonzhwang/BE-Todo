import './AddTask.scss'
const AddTask = ()=>{
    return(
        <div
        className="add-task"
        role="button"
    >
        <span className="add-task__plus">+</span>
        <span className="add-task__text">Add Task</span>
    </div>
    )
}
export default AddTask;