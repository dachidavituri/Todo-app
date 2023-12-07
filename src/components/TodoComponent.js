import styles from "./TodoComponent.css";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import Tasks from "./Tasks";

function TodoApp() {
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    dayOfWeek: null,
    ampm: null,
    dayNumber: null,
  });
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [complete, setComplete] = useState([]);

  const handleItem = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const taskExist = tasks.some((task) => task === newTask);
    if (newTask !== "") {
      setTask([...tasks, newTask]);
      setNewTask("");
    }
    if (taskExist) {
      alert(`Task ${newTask} is already added`);
      setNewTask("");
      setTask([...tasks]);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const deleleTask = (eachTask) => {
    const newTasks = tasks.filter((task) => task !== eachTask);
    const completeTasks = complete.filter((comp) => comp !== eachTask);
    setTask(newTasks);
    setComplete(completeTasks);
  };
  const completeTask = (eachTask) => {
    if (!complete.includes(eachTask)) {
      setComplete([...complete, eachTask]);
    } else {
      const updated = complete.filter((task) => task !== eachTask);
      setComplete(updated);
    }
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() < 12 ? "AM" : "PM";
      const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][
        now.getDay()
      ];
      const dayNumber = now.getDate();
      setCurrentTime({ hours, minutes, dayOfWeek, ampm, dayNumber });
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="todoContainer">
      <div>
        <Clock
          day={currentTime.dayNumber}
          hour={currentTime.hours}
          minutes={currentTime.minutes}
          dayName={currentTime.dayOfWeek}
          ampm={currentTime.ampm}
        />
      </div>
      <div className="main-section">
        <Tasks
          newTask={newTask}
          handleItem={handleItem}
          addTask={addTask}
          tasks={tasks}
          handleKeyPress={handleKeyPress}
          deleteTask={deleleTask}
          completeTask={completeTask}
          complete={complete}
        />
      </div>
    </div>
  );
}

export default TodoApp;
