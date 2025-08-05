const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="remove-btn">Remove</button>
  `;

  // Toggle complete
  li.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
      li.classList.toggle('completed');
    }
  });

  // Remove task
  li.querySelector('.remove-btn').addEventListener('click', function () {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});