document.addEventListener('DOMContentLoaded', function() {
    fetch('new_games.json')
        .then(response => response.json())
        .then(data => {
            const gamesList = document.getElementById('games-ul');
            
            data.games.forEach(game => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                let img = document.createElement('img');
                let p = document.createElement('p');
                
                // Tạo URL cho game
                a.href = `games/${game}/index.html`;
                
                // Tạo đường dẫn ảnh
                img.src = `games/${game}/icon.png`;
                img.alt = game;
                
                // Hiển thị tên game đẹp hơn
                p.textContent = game.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                
                a.appendChild(img);
                a.appendChild(p);
                li.appendChild(a);
                gamesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching games:', error);
        });
});