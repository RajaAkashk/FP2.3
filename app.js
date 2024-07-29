
const tasks = [

  {id: 1, task: "Task 1", status: "todo"},

  {id: 2, task: "Task 2", status: "completed"},

  {id: 3, task: "Task 3", status: "inProgress"},

  {id: 4, task: "Task 4", status: "todo"},

  {id: 5, task: "Task 5", status: "completed"}

]

const radioBtnInput  = document.getElementsByName('tasks')
const result = document.querySelector('#result')

const printTasks = (selectedTask) => {

const taskStatus = selectedTask === "all" ? tasks : tasks.filter(task => task.status === selectedTask);
  
  const tasksStatus = taskStatus.map(task => `
  <li>
  <strong>ID: </strong>${task.id}<br>
  <strong>Task: </strong>${task.task}<br>
  <strong>Status: </strong>${task.status}<br>
  </li>
  <hr>
  `)
  result.innerHTML = tasksStatus.join("")
}

printTasks('all');

radioBtnInput.forEach(radioBtn => {
  radioBtn.addEventListener('change', function(){
    printTasks(this.value);
  })
} )
