

document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('yearSelect');
    const semesterButtons = document.querySelectorAll('.sem-btn');

    // Function to update button colors
    function updateButtonColors(selectedYear) {
        semesterButtons.forEach(button => {
            const buttonYear = button.textContent.match(/\((\d{4})\)/)[1];
            
            if (selectedYear === 'All') {
                button.style.backgroundColor = '#ffffff'; // Normal color
                button.style.color = '#000000'; // Normal text color
            } else if (selectedYear === buttonYear) {
                button.style.backgroundColor = '#ffffff'; // Normal color
                button.style.color = '#000000'; // Normal text color
            } else {
                button.style.backgroundColor = '#C4C4C4'; // Dimmed color
                button.style.color = '#6c757d'; // Dimmed text color
            }
        });
    }

    // Event listener for the dropdown change
    yearSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        let selectedYear;

        if (selectedValue === '5' || selectedValue === 'All') {
            selectedYear = 'All';
        } else {
            selectedYear = selectedValue === '1' ? '2023' : 
                            selectedValue === '2' ? '2024' : 
                            selectedValue === '3' ? '2025' : 
                            selectedValue === '4' ? '2026' : null;
        }

        updateButtonColors(selectedYear);
    });

    // Initialize button colors based on default selection
    updateButtonColors('All');
});




document.addEventListener('DOMContentLoaded', () => {
// Button Navigation Functionality
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const btnGroup = document.getElementById('button-group');

let visibleButtons = 5; // Number of buttons visible at a time
let startIndex = 0;

function updateButtonVisibility() {
    const buttons = btnGroup.getElementsByClassName('sem-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
    }

    for (let i = startIndex; i < startIndex + visibleButtons; i++) {
        if (buttons[i]) {
            buttons[i].style.display = 'inline-block';
        }
    }

    prevBtn.disabled = startIndex === 0;
    nextBtn.disabled = startIndex + visibleButtons >= buttons.length;
}

prevBtn.addEventListener('click', function () {
    if (startIndex > 0) {
        startIndex--;
        updateButtonVisibility();
    }
});

nextBtn.addEventListener('click', function () {
    const buttons = btnGroup.getElementsByClassName('sem-btn');
    if (startIndex + visibleButtons < buttons.length) {
        startIndex++;
        updateButtonVisibility();
    }
});

updateButtonVisibility();
});



document.addEventListener('DOMContentLoaded', () => {
// Sem 1 bar height and value
const sem1Bar = document.querySelector('.sem-1-bar .bar');
const sem1Value = 83; // Change this value dynamically if needed
sem1Bar.style.height = `${sem1Value}%`;
sem1Bar.querySelector('.percentage-value').innerText = `${sem1Value}%`;

// Sem 2 bar height and value
const sem2Bar = document.querySelector('.sem-2-bar .bar');
const sem2Value = 92; // Change this value dynamically if needed
sem2Bar.style.height = `${sem2Value}%`;
sem2Bar.querySelector('.percentage-value').innerText = `${sem2Value}%`;
});


