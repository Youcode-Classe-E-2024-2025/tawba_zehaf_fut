    // Fetch JSON file and populate the player select options
    fetch('players.json')
    .then(response => response.json())
    .then(players => {
        const playerSelect = document.getElementById('playerName');
        
        players.forEach(player => {
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = player.name;
            playerSelect.appendChild(option);
        });
    });

// Handle form submission and player card creation
document.getElementById('addPlayerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const playerPosition = document.getElementById('playerPosition').value;

    // Create player card and append to formation
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card', 'bg-white', 'rounded-lg', 'shadow-md', 'p-4');
    playerCard.innerHTML = `
        <img src="https://via.placeholder.com/64" alt="Player" class="w-16 h-16 rounded-full"/>
        <span class="player-name font-bold text-lg">${playerName}</span>
        <span class="player-position text-sm">${playerPosition}</span>
        <button class="remove-player bg-red-500 text-white p-1 rounded mt-2">Remove</button>
    `;
    document.getElementById('formationContainer').appendChild(playerCard);

    // Reset the form
    event.target.reset();
});

// Remove player functionality
document.getElementById('formationContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-player')) {
        event.target.closest('.player-card').remove();
    }
});

// Handle substitutions (add/remove)
document.querySelector('.icon-[gg--add]').addEventListener('click', function() {
    const newSub = document.createElement('div');
    newSub.classList.add('sub-player', 'bg-white', 'rounded-lg', 'shadow-md', 'p-4');
    newSub.innerHTML = `
        <span class="text-pink-400">Add Substitute</span>
        <button class="remove-sub bg-red-500 text-white p-1 rounded mt-2">Remove</button>
    `;
    document.querySelector('.flex.items-center.justify-start').appendChild(newSub);

    // Remove substitution functionality
    newSub.querySelector('.remove-sub').addEventListener('click', function() {
        newSub.remove();
    });
});