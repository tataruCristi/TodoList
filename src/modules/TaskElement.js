const createTaskElement = (item) => {
  const task = document.createElement('div');
  const taskCheckBox = document.createElement('div');
  const taskPriority = document.createElement('div');
  const taskDescription = document.createElement('div');
  const taskDueDate = document.createElement('div');
  const taskDelete = document.createElement('div');

  // task checkbox
  if (item.isFinished) {
    taskCheckBox.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  } else {
    taskCheckBox.innerHTML = '<i class="fa-regular fa-square"></i>';
  }
  taskCheckBox.classList.add('task-checkBox');

  // task priority
  taskPriority.classList.add('priority-dot');
  if (item.priority === 'low') {
    taskPriority.style.background = 'green';
  } else if (item.priority === 'medium') {
    taskPriority.style.background = 'yellow';
  } else {
    taskPriority.style.background = 'red';
  }

  // task description
  taskDescription.innerHTML = item.description;
  taskDescription.classList.add('task-description');

  //task due date
  taskDueDate.innerHTML = item.dueDate;
  taskDueDate.classList.add('task-dueDate');

  //task delete
  taskDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
  taskDelete.classList.add('task-delete');

  // task
  if (item.isFinished) {
    task.classList.add('finished');
  } else {
    task.classList.remove('finished');
  }
  task.classList.add('task');
  task.appendChild(taskCheckBox);
  task.appendChild(taskPriority);
  task.appendChild(taskDescription);
  task.appendChild(taskDueDate);
  task.appendChild(taskDelete);

  return task;
};
export { createTaskElement };
