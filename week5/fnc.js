// Change Text Content Dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
  document.getElementById('paragraph').textContent = 'The text content has been updated!';
});

// Modify CSS Styles via JavaScript
document.getElementById('changeStyleBtn').addEventListener('click', function() {
  document.getElementById('mainTitle').style.color = '#4caf50';
  document.getElementById('mainTitle').style.fontSize = '3em';
});

// Add a new element when the button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
  const newElement = document.createElement('div');
  newElement.classList.add('new-element');
  newElement.textContent = 'This is a newly added element!';
  document.body.appendChild(newElement);
});

// Remove an element when the button is clicked
document.getElementById('removeElementBtn').addEventListener('click', function() {
  const newElement = document.querySelector('.new-element');
  if (newElement) {
    newElement.classList.add('removed');
    setTimeout(function() {
      newElement.remove();
    }, 1000);
  } else {
    alert('No new element to remove!');
  }
});