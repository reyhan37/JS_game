// var txt;
var r = confirm("Do you want to play a game?");
if (r == true) {
    var playerName = prompt("What is your name?");

    alert('Grant the chicken wants to fight you!');
    var playerHP = 40;
    var grantHP = 10;
    var wins = 0;

    while (wins < 3) {
        

        while ((playerHP > 0) && (grantHP > 0)) {
            playerHP = playerHP - (Math.ceil(Math.random() * 2));
            console.log('Grant the Chicken attacked ' + playerName + '. ' + playerName + ' has ' + playerHP + ' HP left.');
            
            grantHP = grantHP - (Math.ceil(Math.random() * 2));
            console.log(playerName + ' attacked back. Grant the Chicken has ' + grantHP + ' HP left.');
        }

        if (grantHP <= 0) {
            wins = wins + 1;
        }

        if (wins < 3) {
            console.log(playerName + ' knocked down Grant the Chicken.');
            console.log('Grant the Chicken lies on the ground motionless...');
            console.log('...');
            console.log('...');
            console.log('...');
            console.log('Grant the Chicken got back up!');
            grantHP = 10;
        }
    }

    if (playerHP <= 0) {
        alert('Grant the Chicken killed you. You got beat by a chicken.');
        console.log('Grant the Chicken killed ' + playerName + '.');
    }
    
    if (wins = 3) {
        alert('Right-click');
        alert('Inspect');
        alert('Console');
        console.log('Grant the Chicken lies on the ground motionless','\n','...','\n','It seems Grant the Chicken is dead.','\n',playerName + " wins!");
    }
}