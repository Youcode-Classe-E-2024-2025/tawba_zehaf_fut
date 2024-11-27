const players = [
    { position: 'GK', name: 'Goalkeeper' },
    { position: 'LB', name: 'Left Back' },
    { position: 'CB', name: 'Center Back' },
    { position: 'CB', name: 'Center Back' },
    { position: 'RB', name: 'Right Back' },
    { position: 'LM', name: 'Left Midfield' },
    { position: 'CM', name: 'Center Midfield' },
    { position: 'CM', name: 'Center Midfield' },
    { position: 'RM', name: 'Right Midfield' },
    { position: 'ST', name: 'Striker' },
    { position: 'ST', name: 'Striker' }
];

function renderPlayers() {
    const field = document.querySelector('.relative .grid');
    field.innerHTML = '';
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'bg-white p-2 rounded-full w-12 h-12 flex justify-center items-center';
        playerDiv.innerHTML = `<span class="text-sm font-bold">${player.position}</span>`;
        field.appendChild(playerDiv);
    });
}

function addPlayer(position, name) {
    players.push({ position, name });
    renderPlayers();
}

function removePlayer(position) {
    const index = players.findIndex(player => player.position === position);
    if (index !== -1) {
        players.splice(index, 1);
        renderPlayers();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlayers();
});