// sheet.js
//import { PDFDocument } from 'pdf-lib'
// Entry point
(function () {
    console.log("Character Sheet Module Loaded");
    const outputDiv = document.getElementById('output');
    // Example function
    function initializeSheet() {
        console.log("Initializing character sheet...");
        // Load character data from local storage
        const characterData = localStorage.getItem('formData');
        const classIndex = localStorage.getItem('selectedClassIndex');
        const raceIndex = localStorage.getItem('selectedRacialIndex');
        if (characterData) {
            const character = JSON.parse(characterData);
            console.log("Character data loaded:", character);
            console.log("Class index loaded:", classIndex);
            console.log("Race index loaded:", raceIndex);
            // statMatrix stores the preference order of all stats for each class
            let statMatrix = [
                /* artificer */ ["INT", "CON", "DEX", "WIS", "STR", "CHA"],
                /* barbarian */ ["STR", "CON", "DEX", "WIS", "CHA", "INT"],
                /* bard */ ["CHA", "DEX", "CON", "WIS", "INT", "STR"],
                /* cleric */ ["WIS", "CON", "STR", "DEX", "CHA", "INT"],
                /* druid */ ["WIS", "CON", "DEX", "CHA", "INT", "STR"],
                /* fighter */ ["STR", "DEX", "CON", "WIS", "CHA", "INT"],
                /* monk */ ["DEX", "WIS", "CON", "CHA", "STR", "INT"],
                /* paladin */ ["STR", "CHA", "CON", "DEX", "WIS", "INT"],
                /* ranger */ ["DEX", "CON", "WIS", "STR", "CHA", "INT"],
                /* rogue */ ["DEX", "CON", "WIS", "CHA", "INT", "STR"],
                /* sorcerer */ ["CHA", "CON", "DEX", "WIS", "INT", "STR"],
                /* warlock */ ["CHA", "CON", "DEX", "WIS", "INT", "STR"],
                /* wizard */ ["INT", "CON", "DEX", "WIS", "CHA", "STR"]          
            ];
            const statOrder = statMatrix[classIndex];

            // Standard array
            const standardArray = [15, 14, 13, 12, 10, 8];

            // Map stat names to values based on the order
            const stats = {};
            statOrder.forEach((stat, i) => {
                stats[stat] = standardArray[i];
            });

            // Define the standard D&D sheet order
            const sheetOrder = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

            outputDiv.innerHTML += `<p>
            Character race: ${character.race}
            <br><br>
            Character class: ${character.class}
            <br><br>
            Character background: ${character.background}
            <br><br>
            Character level: ${character.level}
            <br><br>
            <b>Assigned Stats (Sheet Order):</b>
            <br><br>
            ${sheetOrder.map(stat => `${stat}: ${stats[stat] ?? "-"}`).join("<br>")}
            </p>`;

        } else {
            console.log("No character data found.");
        }
    }
    // Call initialization
    initializeSheet();
})();