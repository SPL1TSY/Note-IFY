const newNoteForm = document.getElementById('new-note-form');
const newNoteInput = document.getElementById('note-content');
const noteList = document.getElementById('note-list');

// Function to create a new note element
function createNoteElement(note, id) {
  const li = document.createElement('li');
  li.setAttribute('data-id', id);
  li.textContent = note;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteNoteElement(li);
  });
  li.appendChild(deleteButton);
  return li;
}

// Function to add a new note to the list and the server
function addNote() {
  const note = newNoteInput.value;
  if (note !== '') {
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note })
    })
      .then(res => res.text())
      .then(() => {
        newNoteInput.value = '';
        fetchNotes();
      })
      .catch(err => console.error(err));
  } else {
    noteList.innerHTML = '<p class="errorMsg">You have to write a note before you can add it..</p>';
  }
}

// Function to delete a note from the list and the server
function deleteNoteElement(noteElement) {
  const id = noteElement.getAttribute('data-id');
  fetch(`/notes/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.text())
    .then(() => {
      noteElement.remove();
    })
    .catch(err => console.error(err));
}

// Function to fetch all notes from the server and display them in the UI
function fetchNotes() {
  fetch('/notes')
    .then(res => res.json())
    .then(notes => {
      noteList.innerHTML = '';
      notes.forEach((note, id) => {
        const noteElement = createNoteElement(note, id);
        noteList.appendChild(noteElement);
      });
    })
    .catch(err => console.error(err));
}

// Add event listener for new note form submission
newNoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addNote();
});

// Fetch all notes on page load
fetchNotes();

