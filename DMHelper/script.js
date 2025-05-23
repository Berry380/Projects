// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

    const el = document.getElementById('subRaceD');
    if (el) el.style.display = 'inline-block';

    const form = document.getElementById('inputForm');

    // Add event listener for form submission
    
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

    form.addEventListener('change', function() {
        let raceSelect = form.querySelector('select[name="race"]');
        const selectedRacialIndex = raceSelect.selectedIndex;
        const raceValue = raceSelect.value;

        // Hide all subrace selectors by default (with null checks)
        const subraceIds = ['subRaceE', 'subRaceH', 'subRaceG', 'subRaceD'];
        subraceIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });

        // Show the appropriate subrace selector
        if (raceValue === "Elf") {
            const el = document.getElementById('subRaceE');
            if (el) el.style.display = 'inline-block';
        } else if (raceValue === "Halfling") {
            const el = document.getElementById('subRaceH');
            if (el) el.style.display = 'inline-block';
        } else if (raceValue === "Gnome") {
            const el = document.getElementById('subRaceG');
            if (el) el.style.display = 'inline-block';
        } else if (raceValue === "Dwarf") {
            const el = document.getElementById('subRaceD');
            if (el) el.style.display = 'inline-block';
        }

        switch(selectedRacialIndex){
            case 0:
                console.log("Dwarf selected");
                break;
            case 1:
                console.log("Elf selected");
                break;
            case 2:
                console.log("Halfling selected");
                break;
            case 5:
                console.log("Gnome selected");
                break;
            default:
                console.log("Subrace not allowed");
                break;
        }   

        console.log(selectedRacialIndex)
        localStorage.setItem('selectedRacialIndex', selectedRacialIndex);       
    });  
});


