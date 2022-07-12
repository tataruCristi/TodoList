import './style.css';
import {
  loadTasks,
  saveTask,
  deleteTask,
  toggleCheckBox,
} from './modules/Storage';
import Task from './modules/Task';
import { createTaskElement } from './modules/TaskElement';
import { isToday, isThisWeek } from 'date-fns';

// Buttons
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const addItemBtn = document.querySelector('#addElement');
const allTasksBtn = document.querySelector('#allTasks');
const todayBtn = document.querySelector('.navigation-bar__today');
const thisWeekBtn = document.querySelector('.navigation-bar__week');

const displayElements = document.querySelector('.display__elements');
const modal = document.querySelector('#modal');
const displayTitle = document.querySelector('#display_title');

// Form from modal
const item = document.querySelector('#item');
const date = document.querySelector('#date');
const checkBox = document.getElementsByName('priority');

const getCheckedRadio = () => {
  for (const check of checkBox) {
    if (check.checked) {
      return check.value;
    }
  }
};

const resetRadioButtons = () => {
  for (const check of checkBox) {
    if (check.value === 'medium') {
      check.checked = true;
    } else {
      check.checked = false;
    }
  }
};

const loadListElements = (tasksList) => {
  displayElements.innerHTML = '';

  let itemsStorage;

  if (tasksList === undefined) {
    itemsStorage = loadTasks();
  } else {
    itemsStorage = tasksList;
  }

  for (const item of itemsStorage) {
    displayElements.appendChild(createTaskElement(JSON.parse(item)));
  }
};

window.addEventListener('DOMContentLoaded', () => loadListElements());

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hide-modal');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hide-modal');
});

addItemBtn.addEventListener('click', (e) => {
  e.preventDefault();
  saveTask(new Task(item.value, date.value, getCheckedRadio()));
  item.value = '';
  date.value = '';
  resetRadioButtons();
  modal.classList.add('hide-modal');
  loadListElements();
});

allTasksBtn.addEventListener('click', () => {
  displayTitle.textContent = 'All tasks';
  loadListElements();
});

todayBtn.addEventListener('click', () => {
  const allTasks = loadTasks();
  let todaysTasks = [];
  for (const task of allTasks) {
    if (isToday(new Date(JSON.parse(task).dueDate))) {
      todaysTasks.push(task);
    }
  }
  displayTitle.textContent = "Today's tasks";
  loadListElements(todaysTasks);
});

thisWeekBtn.addEventListener('click', () => {
  const allTasks = loadTasks();
  let thisWeekTasks = [];
  for (const task of allTasks) {
    if (isThisWeek(new Date(JSON.parse(task).dueDate))) {
      thisWeekTasks.push(task);
    }
  }
  displayTitle.textContent = "This week's tasks";
  loadListElements(thisWeekTasks);
});

displayElements.addEventListener('click', (e) => {
  if (e.target && e.target.className === 'task-delete') {
    const parentElement = e.target.parentElement;
    deleteTask(parentElement.children[2].innerHTML);
    loadListElements();
  }
  if (e.target && e.target.className === 'task-checkBox') {
    const parentElement = e.target.parentElement;
    toggleCheckBox(parentElement.children[2].innerHTML);
    loadListElements();
  }
});
