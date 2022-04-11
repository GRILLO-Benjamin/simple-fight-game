let GameManager = 
{
    setGameStart: function(classType)
    {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType)
    {
        switch (classType) 
        {
        case "Warrior":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
        case "Rogue":
            player = new Player(classType, 100, 0, 100, 150, 200);
            break;
        case "Ranger":
            player = new Player(classType, 200, 0, 50, 200, 100);
            break;
        case "Mage":
            player = new Player(classType, 80, 120, 100, 200, 150);
            break;
       }
       let getInterface = document.querySelector(".interface");
       getInterface.innerHTML = '<img src="./img/heroes/'+ 
       classType.toLowerCase() +'.webp" class="img-avatar"><div><h3>' 
       + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' 
       + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p><div>';
    },
    setPreFight: function()
    {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Tâche: Recherchez un adversaire !</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Partez à la recherche d\'un monstre à occire !</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function()
    {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //create enemy!
        let enemy00 = new Enemy("Gobelin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Ogre", 200, 0, 150, 80, 100);
        let enemy02 = new Enemy("Murloc", 100, 0, 50, 80, 100);
        let enemy03 = new Enemy("Treant", 100, 50, 150, 80, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));

        switch (chooseRandomEnemy) 
        {
        case 0:
            enemy = enemy00;
            break;
        case 1:
            enemy = enemy01;
            break;
        case 2:
            enemy = enemy02;
            break;
        case 3:
            enemy = enemy03;
            break;
       }
       getHeader.innerHTML = '<p>Tâche: Préparez-vous à Attaquer !</p>';
       getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Lancez votre attaque et débarassez-vous de cette vermine !</a>';
       getEnemy.innerHTML = '<img src="./img/vilain/'+ 
       enemy.enemyType.toLowerCase() +'.jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' 
       + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' 
       + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p><div>';
    }
}