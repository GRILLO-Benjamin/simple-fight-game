let player;

function Player(classType, health, mana, strength, agility, speed)
    {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    }

    let PlayerMoves =
    {
        calcAttack: function ()
        // who attacks first ?
        {
            getPlayerSpeed = player.speed;
            getEnemySpeed = enemy.speed;
            // the player attacks!
    
            let playerAttack = function()
            {
                let calcBaseDamage;
                if(player.mana > 0)
                {
                    calcBaseDamage = player.strength * player.mana / 1000
                }
                else
                {
                    calcBaseDamage = player.strength * player.agility / 1000
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBaseDamage + offsetDamage;
                //number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
                let attackValues = [calcOutputDamage,numberOfHits];
                return attackValues;
            }
                    // the enemy attacks!
    
            let enemyAttack = function()
            {
                let calcBaseDamage;
                if(enemy.mana > 0)
                {
                    calcBaseDamage = enemy.strength * enemy.mana / 1000
                }
                else
                {
                    calcBaseDamage = enemy.strength * enemy.agility / 1000
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBaseDamage + offsetDamage;
                //number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
                let attackValues = [calcOutputDamage,numberOfHits];
                return attackValues;
            }
            // Get player / enemy health to change later!
            let getPlayerHealth = document.querySelector(".health-player");
            let getEnemyHealth = document.querySelector(".health-enemy");
            // Initiate attacks!
            if(getPlayerSpeed >= getEnemySpeed)
            {
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("Vous infligez " + playerAttackValues[0] + " points de dégats " + playerAttackValues[1] + " fois." );
                if(enemy.health <= 0)
                {
                alert("Vous avez vaincu votre adversaire ! Félicitation ! Vous pouvez actualiser la page pour faire un nouveau combat" );
                getPlayerHealth.innerHTML = "Health: " + player.health;
                getEnemyHealth.innerHTML = "Health: 0";
    
                }
                else
                {
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    // Enemy attacks
                    let enemyAttackValues = enemyAttack();
                    let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                    player.health = player.health - totalDamage;
                    alert("Votre adversaire vous inflige " + enemyAttackValues[0] + " points de dégats " + enemyAttackValues[1] + " fois." );
                    if(player.health <= 0)
                    {
                    alert("Vous avez été vaincu ! Vous ferez mieux la prochaine fois !  Vous pouvez actualiser la page pour faire un nouveau combat" );
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    getPlayerHealth.innerHTML = "Health: 0";
                    }
                    else
                    {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    }
                }

            }
            else if(getPlayerSpeed <= getEnemySpeed)
            {
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Votre adversaire vous inflige " + enemyAttackValues[0] + " points de dégats " + enemyAttackValues[1] + " fois." );
                if(player.health <= 0)
                {
                alert("Vous avez été vaincu ! Vous ferez mieux la prochaine fois !  Vous pouvez actualiser la page pour faire un nouveau combat");
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                getPlayerHealth.innerHTML = "Health: 0";
    
                }
                else
                {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    // Player attacks
                    let playerAttackValues = playerAttack();
                    let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                    enemy.health = enemy.health - totalDamage;
                    alert("Vous infligez" + playerAttackValues[0] + " points de dégats " + playerAttackValues[1] + " fois.");
                    if(enemy.health <= 0)
                    {
                    alert("Vous avez vaincu votre adversaire ! Félicitation ! Vous pouvez actualiser la page pour faire un nouveau combat" );
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: 0";
                    }
                    else
                    {
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    }
                }

            }

        }

    }

