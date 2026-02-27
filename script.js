// 1. The Game Database (Array of Objects)
const games =[
    {
        title: "Krunker.io",
        genre: "FPS",
        description: "A fast-paced, pixelated first-person shooter. Features advanced movement mechanics like slide-hopping and custom maps.",
        url: "https://krunker.io"
    },
    {
        title: "Cookie Clicker",
        genre: "Idle",
        description: "The classic incremental game. Bake cookies, hire grandmas, buy upgrades, and watch the numbers go up to infinity.",
        url: "https://orteil.dashnet.org/cookieclicker/"
    },
    {
        title: "Wordle",
        genre: "Puzzle",
        description: "Guess the hidden 5-letter word in 6 tries. A simple, elegant, and highly addictive daily puzzle.",
        url: "https://www.nytimes.com/games/wordle/index.html"
    },
    {
        title: "Skribbl.io",
        genre: "Party",
        description: "Free multiplayer drawing and guessing game. Create a private room with friends or play with strangers.",
        url: "https://skribbl.io"
    },
    {
        title: "Slither.io",
        genre: "Arcade",
        description: "Eat glowing orbs and grow your snake. Cut off other players to defeat them and become the biggest snake on the server.",
        url: "https://slither.io"
    },
    {
        title: "GeoGuessr",
        genre: "Puzzle",
        description: "You are dropped into a random Google Street View location. Use context clues to figure out where you are in the world.",
        url: "https://www.geoguessr.com"
    }
];

// 2. DOM Elements
const gameContainer = document.getElementById('gameContainer');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');

// 3. Render Function
// Takes an array of games and turns them into HTML cards
function displayGames(gamesToDisplay) {
    // Clear the container first
    gameContainer.innerHTML = ''; 
    
    // Check if no games match the search
    if(gamesToDisplay.length === 0) {
        gameContainer.innerHTML = '<p style="font-size: 1.2em; color: #b3b3b3;">No games found matching your search.</p>';
        return;
    }

    // Loop through the games array and create elements
    gamesToDisplay.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';

        // Add inner HTML to the card
        card.innerHTML = `
            <span class="game-genre">${game.genre}</span>
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <a href="${game.url}" target="_blank" class="play-btn">Play Now</a>
        `;

        // Append the card to the container
        gameContainer.appendChild(card);
    });
}

// 4. Filter Function
// Runs whenever the user types in the search box or changes the dropdown
function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;

    const filteredGames = games.filter(game => {
        // Check if title or description includes the search word
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) || 
                              game.description.toLowerCase().includes(searchTerm);
        
        // Check if the genre matches the dropdown (or if "all" is selected)
        const matchesGenre = selectedGenre === 'all' || game.genre === selectedGenre;
        
        // Keep the game only if it matches BOTH conditions
        return matchesSearch && matchesGenre;
    });

    // Display the newly filtered array
    displayGames(filteredGames);
}

// 5. Event Listeners
searchInput.addEventListener('input', filterGames); // 'input' triggers on typing or pasting
genreFilter.addEventListener('change', filterGames);

// 6. Initialize the site by displaying all games on load
displayGames(games);
