class combatant {
    constructor(name, HP) {
        this.name = name;
        this.HP = HP;
    }

    getDamage() {
        this.HP = this.HP - (Math.floor(Math.random() * 5) + 1);
    }
}

var grantChkn = new combatant("Grant the Chicken", 10);

var player = new combatant("", 40);

var wins = 0;

function startGame() {
    var r = confirm("Do you want to play a game?");
    if (r == true) {
        player.name = prompt("What is your name?");

        startCombat();
    }
}

function startCombat() {
    alert("Now " + player.name + " and " + grantChkn.name + " will fight to the death!");
    
    while (player.HP > 0 && wins < 3) {
        var action = prompt (player.name + " has " + player.HP + " HP left. " + grantChkn.name + " has " + grantChkn.HP + " HP left. 'attack' or 'quit'?");
        if (action === ("attack" || "Attack")) {
            alert(player.name + " and " + grantChkn.name + " exchange blows!");
            player.getDamage();
            grantChkn.getDamage();

            if (grantChkn.HP <= 0) {
                wins++;
                if (wins < 3) {
                    alert(player.name + " knocked down " + grantChkn.name + ".");
                    alert(grantChkn.name + " got back up to fight again!");
                    grantChkn.HP = 10;
                }
            }
        } else if (action === ("quit" || "Quit")) {
            wins = 4
        } else {
            alert("Invalid input.");
        }
    }

    if (player.HP <= 0 && grantChkn.HP <= 0 && wins === 3) {
        alert("Both " + player.name + " and " + grantChkn.name + " are knocked out...");
        alert("It's a draw.");
    } else if (player.HP > 0 && wins === 3) {
        alert(grantChkn.name + " lies on the ground motionless.");
        alert(player.name + " wins!");
    } else if (player.HP <= 0) {
        alert(grantChkn.name + " knocked down " + player.name + ".");
        alert(player.name + " is dead. " + grantChkn.name + " wins.")
    } else {
        alert(player.name + " ran away.");
        alert(grantChkn.name + " wins!");
    }
}

startGame();