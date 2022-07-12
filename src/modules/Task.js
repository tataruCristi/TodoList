export default class Task {
  constructor(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isFinished = false;
  }

  setName(description) {
    this.description = description;
  }

  getName() {
    return this.description;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  getDueDate() {
    return this.dueDate;
  }

  setIsFinished(isFinished) {
    this.isFinished = isFinished;
  }

  getIsFinished() {
    return this.isFinished;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }
}
