"use strict";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

function Paddel(width, height, color, positionX, positionY){
    this.width = width;
    this.height = height;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = 3;
    this.middleHeight = height/2;
}

function Ball(size, color, positionX, positionY){
    this.width = size;
    this.height = size;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.middleHeight = size/2;
    this.speedX = 2;
    this.speedY = 2;
    this.directionX = true;//true -> w prawo
    this.directionY = true;//true -> w dół
}

const drawObject = (collisionObject, context) => {
    //zamiast forEach -> 
    //for(let i=0; i<collisionObject; i++)
    //ctx.fillStyle = 'green';
    //ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
    collisionObject.forEach(collisionObject => {
       context.fillStyle = collisionObject.color;
       context.fillRect(collisionObject.positionX, collisionObject.positionY, collisionObject.width, collisionObject.height);
    });
}

const collisionObject = [];

const playerPaddel = new Paddel(20, 120, 'green', 10, 50 ); 
const computerPaddel = new Paddel(20, 120, 'red', canvas.width-30, 100); 
const ball1 = new Ball(18, 'black', canvas.width/2-4, canvas.height/2-4);
const ball2 = new Ball(18, 'black', canvas.width/2-25, canvas.height/2);
const ball3 = new Ball(18, 'black', canvas.width/2-50, canvas.height/2);

collisionObject.push(playerPaddel, computerPaddel, ball1, ball2, ball3);


drawObject(collisionObject, ctx);
