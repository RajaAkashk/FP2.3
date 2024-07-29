const tasks =[
  {id:1, title:"Task 1", status:"todo"},
  {id:2, title:"Task 2", status:"inProgress"},
  {id:3, title:"Task 3", status:"completed"},
  {id:4, title:"Task 4", status:"todo"},
]

const selectedStatus = document.querySelector('#status')


const printTasks = (tasks) => {
const result = document.querySelector('#result')
  const allTasks = tasks.map(task => `
  <li>
  <strong>ID: </strong>${task.id}<br>
   <strong>Title: </strong>${task.title}<br>
    <strong>Status: </strong>${task.status}<br>
  </li>
  <hr>
  `)
  result.innerHTML = allTasks.join("")
}

printTasks(tasks);

selectedStatus.addEventListener('change', function(e){
  e.preventDefault();
const selectedValue = selectedStatus.value;
if(selectedValue !== "all"){
  if(selectedValue === "todo"){
    printTasks(tasks.filter(task => task.status === "todo"))
  }
  else if(selectedValue === "inProgress"){
      printTasks(tasks.filter(task => task.status === "inProgress"))
    }
  else if(selectedValue === "completed"){
    printTasks(tasks.filter(task => task.status === "completed"))
  }
}
  else{
     printTasks(tasks)
  }
  
})
