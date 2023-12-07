import circle from "./Images/akar-icons_circle.svg";
import trash from "./Images/akar-icons_trash-can.svg";
import fullCirlce from "./Images/akar-icons_circle.png";
function Task(props) {
  return (
    <div>
      <div className="add-section">
        <input
          value={props.newTask}
          onChange={props.handleItem}
          placeholder="Note"
          className="add-input-section"
          onKeyPress={props.handleKeyPress}
        />
        <button onClick={props.addTask} className="add-btn"></button>
      </div>
      {props.tasks.map((task, index) => (
        <div className="task-content" key={index}>
          <div>
            <p>{task}</p>
          </div>
          <div className="comp-del-section">
            <div onClick={() => props.completeTask(task)}>
              {props.complete.includes(task) ? (
                <img src={fullCirlce} />
              ) : (
                <img src={circle} />
              )}
            </div>
            <div onClick={() => props.deleteTask(task)}>
              <img src={trash} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Task;
