// Wait for the page to load
const form = document.getElementById('inputForm');
if (!form) {
    console.error("Form element not found");
}

document.addEventListener('DOMContentLoaded', function() {

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the selected class index and store it in local storage
        const classSelect = form.querySelector('select[name="class"]');
        const selectedClassIndex = classSelect.selectedIndex;
        localStorage.setItem('selectedClassIndex', selectedClassIndex);

        // Get the racial index and store it in local storage
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

document.addEventListener('DOMContentLoaded', function() {

});