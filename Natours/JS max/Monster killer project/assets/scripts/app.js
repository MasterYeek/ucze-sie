const attackValue = 10;
const strongAttackValue = 18;
const monsterAttackValue = 14;
const healValue = 20;

const mode_attack = "ATTACK";
const mode_strong_attack = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "player_attack";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "strong_player_attack";
const LOG_EVENT_PLAYER_MONSTER_ATTACK = "monster_attack";
const LOG_EVENT_PLAYER_HEAL = "player_heal";
const LOG_EVENT_GAME_OVER = "game_over";

function getMaxLifeValues() {
  const enteredValue = prompt("Maximum life for you and the monster.", "100");

  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: "invalid user input not a number!" };
  }
  return parsedValue;
}

let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert("You entered wrong. defulat  = 100");
}
let battleLog = [];
let lastLoggedEntry;

let hasBonusLife = true;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "Monster";
  }
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_PLAYER_MONSTER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "Player",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: event,
      value: value,
      target: "Player",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }
  battleLog.push(logEntry);
}
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert("You would be dead but the bonus life saved you ! :)");
    setPlayerHealth();
    writeToLog(
      LOG_EVENT_PLAYER_MONSTER_ATTACK,
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset(chosenMaxLife);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset(chosenMaxLife);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );
    reset(chosenMaxLife);
  }
}

function attackMonster(mode) {
  const maxDamage = mode === mode_attack ? attackValue : strongAttackValue;
  const logEvent =
    mode === mode_attack
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (mode === mode_attack) {
  //   maxDamage = attackValue;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === mode_strong_attack) {
  //   maxDamage = strongAttackValue;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attack() {
  attackMonster(mode_attack);
}

function strongAttack() {
  attackMonster(mode_strong_attack);
}

function healPlayer() {
  let heal_Value;
  if (currentPlayerHealth >= chosenMaxLife - healValue) {
    alert("You can't heal to more than you max healt.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    heal_Value = healValue;
  }
  increasePlayerHealth(heal_Value);
  currentPlayerHealth += heal_Value;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    heal_Value,
    "PLAYER WON",
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLog() {
  for (let i = 0; i < 3; i++) {
    console.log("-------");
  }

  //  Same (while loop)
  // let j = 0;
  // while (j < 3) {
  //   console.log("--------");
  //   j++;
  // }
  // for (let i = 10; i > 0; i--) {
  //   console.log(i);
  // }
  // console.log(battleLog);
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  //Same (Only arrays)
  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(key);
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}
attackBtn.addEventListener("click", attack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", printLog);
