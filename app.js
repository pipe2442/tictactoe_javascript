    
    var spot = function getId(spot) { spot.id };
    
    let game = false;
    let turn = 0;

    const player_name1 = document.getElementById('firstplayer');
    const player_name2 = document.getElementById('secondplayer');

    function Player(name, marker) {
        this.name = name
        this.marker = marker
    }
    
    const player1 = new Player(player_name1, 'x')
    const player2 = new Player(player_name2, 'o')

    const newGame = () => { game = true };
    
    while(game) {
        if (turn % 2 == 0) {
            document.getElementById(spot).innerHTML = 'x' 
        } else {
            document.getElementById(spot).innerHTML = 'o' 
        }

        if(turn > 3) {game = false};
        turn += 1;
    };