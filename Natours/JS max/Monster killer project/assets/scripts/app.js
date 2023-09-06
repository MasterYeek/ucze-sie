const attackValue = 10;
const strongAttackValue = 18;
const monsterAttackValue = 14;
const healValue = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = attackValue;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = strongAttackValue;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attack() {
  attackMonster("ATTACK");
}

function strongAttack() {
  attackMonster("STRONG_ATTACK");
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
  endRound();
}

attackBtn.addEventListener("click", attack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
