const newNoteForm = document.getElementById('new-note-form');
const newNoteInput = document.getElementById('note-content');
const noteList = document.getElementById('note-list');

function createNoteElement(note, id) {
  const li = document.createElement('li');
  li.setAttribute('data-id', id);

  const noteText = document.createElement('span');
  noteText.textContent = note;
  li.appendChild(noteText);

  const buttonContainer = document.createElement('div');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    editNoteElement(li);
  });
  buttonContainer.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteNoteElement(li);
  });
  buttonContainer.appendChild(deleteButton);

  li.appendChild(buttonContainer);

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

/*function addEditAndDeleteButtons(noteElement, id) {
  // Add an 'Edit' button to edit the note
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    editNoteElement(noteElement);
  });

  // Add a 'Delete' button to delete the note
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    fetch(`/notes/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.text())
      .then(() => {
        // Remove the note element from the DOM
        noteElement.remove();
      })
      .catch(err => console.error(err));
  });

  // Append the buttons to the note element
  noteElement.appendChild(editButton);
  noteElement.appendChild(deleteButton);
}*/

function editNoteElement(noteElement) {
  const id = noteElement.getAttribute('data-id');
  const noteText = noteElement.textContent.replace("EditDelete", "");

  // Create an input field with the current note as the default value
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', noteText);

  // Replace the text with the input field
  noteElement.textContent = '';
  noteElement.appendChild(input);

  // Add a 'Save' button to save the edited note
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  saveButton.addEventListener('click', () => {
    const note = input.value;
    // Update the note element with the new note text
    noteElement.textContent = note;
    fetch(`/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note })
    })
      .then(res => res.text())
      .then(() => {
        // Add back the 'Edit' and 'Delete' buttons
        //addEditAndDeleteButtons(noteElement, id);
      })
      .catch(err => console.error(err));
  });

  // Add a 'Cancel' button to cancel the edit
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => {
    // Update the note element with the original note text
    noteElement.textContent = noteText;
    // Add back the 'Edit' and 'Delete' buttons
    //addEditAndDeleteButtons(noteElement, id);
  });

  // Remove the 'Edit' and 'Delete' buttons
  noteElement.querySelectorAll('button').forEach(button => button.remove());

  // Add the save and cancel buttons to the note element
  noteElement.appendChild(saveButton);
  noteElement.appendChild(cancelButton);
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