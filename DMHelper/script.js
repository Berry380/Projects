// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add event listener for form submission
    const form = document.getElementById('inputForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        console.log(json);
        localStorage.setItem('formData', json);
        window.location.href = "../DMHelper/CharSheet/sheet.html";
        const result = document.getElementById('result');
    });
});
