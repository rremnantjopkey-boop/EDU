function searchGames() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const games = document.querySelectorAll('.game');

            games.forEach(game => {
                const title = game.getAttribute('data-title').toLowerCase();
                game.style.display = title.includes(input) ? '' : 'none';
            }
        );
        }

    