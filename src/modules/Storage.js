export { loadTasks, saveTask, deleteTask, toggleCheckBox };

let allTasks = [];

const loadTasks = () => {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('tasks'));
};

const saveTask = (task) => {
  if (localStorage.getItem('tasks') !== null) {
    allTasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  allTasks.push(JSON.stringify(task));
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const deleteTask = (taskName) => {
  if (localStorage.getItem('tasks') !== null) {
    allTasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  const newAllTasks = allTasks.filter((task) => {
    return JSON.parse(task).description !== taskName;
  });

  localStorage.setItem('tasks', JSON.stringify(newAllTasks));
};

const toggleCheckBox = (taskName) => {
  if (localStorage.getItem('tasks') !== null) {
    allTasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', []);
  }
  for (let i = 0; i < allTasks.length; i++) {
    const taskObj = JSON.parse(allTasks[i]);
    if (taskObj.description === taskName) {
      taskObj.isFinished = !taskObj.isFinished;
    }

    allTasks[i] = JSON.stringify(taskObj);
  }

  localStorage.setItem('tasks', JSON.stringify(allTasks));
};
