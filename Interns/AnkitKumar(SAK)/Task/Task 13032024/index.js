// Get the mouse position
const mousePosition = {
    x: this.clientX,
    y: this.clientY,
  };
  
  // Create a magnifier element
  const mg = document.createElement('div');
  mg.classList.add('mg');
  mg.style.position = 'absolute';
  mg.style.left = mousePosition.x + 'px';
  mg.style.top = mousePosition.y + 'px';
  
  document.getElementById('container').appendChild(mg);
  // Add the magnifier to the document
  
  // Get the element under the magnifier
  const elementUnderMagnifier = document.elementFromPoint(mousePosition.x, mousePosition.y);
  
  // Magnify the element
  elementUnderMagnifier.style.transform = 'scale(2)';
  
  // Remove the magnifier when the mouse moves away
  document.addEventListener('mousemove', (event) => {
    mg.remove();
  });
  