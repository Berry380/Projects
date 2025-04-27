// sheet.js
import { PDFDocument } from 'pdf-lib'
// Entry point
(function () {
    console.log("Character Sheet Module Loaded");
    const outputDiv = document.getElementById('output');
    // Example function
    function initializeSheet() {
        console.log("Initializing character sheet...");
        // Load character data from local storage
        const characterData = localStorage.getItem('formData');
        if (characterData) {
            const character = JSON.parse(characterData);
            console.log("Character data loaded:", character);
            // Populate the sheet with character data
            console.log("character", character);
            outputDiv.innerHTML += `<p>
            Character race: ${character.race}
            <br><br>
            Character class: ${character.class}
            <br><br>
            Character level: ${character.level}
            </p>`;
            // Add more fields as needed
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
        } else {
            console.log("No character data found.");
        }
    }
    // Call initialization
    initializeSheet();
})();