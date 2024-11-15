// Mendapatkan elemen-elemen yang dibutuhkan
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambahkan tugas
function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue !== '') {
    // Membuat elemen <li> baru
    const taskItem = document.createElement('li');

    // Membuat elemen teks untuk tugas
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskItem.appendChild(taskText);

    // Membuat tombol delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);

    // Menambahkan tugas ke dalam list
    taskList.appendChild(taskItem);

    // Mengosongkan input setelah tugas ditambahkan
    taskInput.value = '';
  } else {
    alert('Tugas tidak boleh kosong!');
  }
}

// Event listener untuk tombol tambah
addTaskButton.addEventListener('click', addTask);

// Event listener untuk menambahkan tugas dengan Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
