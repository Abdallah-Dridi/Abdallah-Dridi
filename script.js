// script.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
      });
      button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
      });
    });
  });
  