const checkbox = document.getElementById('bg-toggle');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

checkbox.addEventListener('change', () => {
    
    body.classList.toggle('light-bg', checkbox.checked);

    
    if (checkbox.checked) {
        sunIcon.style.display = 'none';  
        moonIcon.style.display = 'inline';  
    } else {
        sunIcon.style.display = 'inline'; 
        moonIcon.style.display = 'none'; 
    }
});
