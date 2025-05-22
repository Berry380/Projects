// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add event listener for form submission
    const form = document.getElementById('inputForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the selected class index and store it in local storage
        const classSelect = form.querySelector('select[name="class"]');
        const selectedClassIndex = classSelect.selectedIndex;
        localStorage.setItem('selectedClassIndex', selectedClassIndex);

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log(json);
        localStorage.setItem('formData', json);
        
        // Redirect to the character sheet page
        window.location.href = "../DMHelper/CharSheet/sheet.html";
        const result = document.getElementById('result');
    });
});
