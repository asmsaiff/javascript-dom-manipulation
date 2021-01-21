let task_Form               = document.getElementById('task-form')
let task_Form_Input         = document.getElementById('task')
let task_List               = document.querySelector('.collection')
let task_List_Remove_Btn    = document.querySelector('.clear-tasks')
let filter_Task             = document.querySelector('#filter')

task_Form.addEventListener('submit', listItemInsertHandler)
task_List.addEventListener('click', taskRemove)
task_List_Remove_Btn.addEventListener('click', removeList)
filter_Task.addEventListener('keyup', filterTaskHandler)

function listItemInsertHandler(e) {
    if(task_Form_Input.value === '') {
        alert('Please enter your task')
    } else {
        let li              = document.createElement('li')
        li.className        = 'collection-item'
        li.innerHTML        = task_Form_Input.value

        let close           = document.createElement('a')
        close.className     = 'delete-item secondary-content'
        close.id            = 'close'
        close.setAttribute('href', '#')
        close.innerHTML     = '<i class="fa fa-remove"></i>'

        li.appendChild(close)
        task_List.appendChild(li)
        task_Form_Input.value = ''
        e.preventDefault()
    }
}

function taskRemove() {
    if(document.getElementById('close').parentElement.className === 'collection-item') {
        if(confirm('Are you sure?')) {
            document.getElementById('close').parentElement.remove()
        }
    }
}

function removeList(e) {
    task_List.innerHTML      = ''
    e.preventDefault()
}

function filterTaskHandler(e) {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}