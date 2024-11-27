
// Fetch JSON data from a file
let playersData = [];
fetch('players.json')  // Replace with your actual JSON file path
    .then(response => response.json())
    .then(data => {
        playersData = data;
        populatePlayerNames();
    })
    .catch(error => console.error('Error loading players JSON:', error));

// Populate the player dropdown from the JSON
function populatePlayerNames() {
    const playerSelect = document.getElementById('playerName');
    playersData.forEach(player => {
        const option = document.createElement('option');
        option.value = player.name;
        option.textContent = player.name;
        playerSelect.appendChild(option);
    });
}

// Handle Add Player form submission
document.getElementById("addPlayerForm").onsubmit = function (e) {
    e.preventDefault();
    const playerName = document.getElementById("playerName").value;
    const playerPosition = document.getElementById("playerPosition").value;

    // Find the selected player from the JSON data
    const selectedPlayer = playersData.find(player => player.name === playerName);

    if (selectedPlayer) {
        // Update the player position with the selected player
        const playerCard = document.querySelector(`[data-pos="${playerPosition}"]`);
        if (playerCard) {
            playerCard.innerHTML = `<p class="font-bold">${selectedPlayer.name}</p>`;
            playerCard.classList.add("player-added");
        }
    }
};
