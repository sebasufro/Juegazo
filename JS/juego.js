//Logica del juego

//Constructor de los Jugadores
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} inflige ${this.damage} de daño a ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }

  getName() {
    return `${this.name}`;
  }

  getHealth() {
    return `${this.health}`;
  }
}

//Movimiento -- Por Hacer

const pantalla = document.getElementById("pantallaJuego");
const pantallaxt = pantalla.getContext("pantalla");

//Movimiento Player 1

let player1Up = false;
let player1Left = false;
let player1Right = false;
let player1Down = false;

//Movimiento Player 2

let player2Up = false;
let player2Left = false;
let player2Right = false;
let player2Down = false;

//Fisicas Bala -- Por Hacer

const player1 = new Character("Jugador 1", 130, 5);
const player2 = new Character("Jugador 2", 150, 10);

console.log(player1);
console.log(player2);

document.getElementById("nombre-p1").innerHTML = player1.getName();
document.getElementById("nombre-p2").innerHTML = player2.getName();
