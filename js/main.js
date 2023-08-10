 class Player{
 constructor(){
    this.positionX = 50;
    this.positionY = 0;
    this.width = 20;
    this.height = 20;
    this.domElement = null;
    this.createDomElement();
 }
 createDomElement(){
    this.domElement = document.createElement("div");
    this.domElement.id = "player";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
 }
 moveLeft(){
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    
 }
 moveRight(){
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
 }
}


class Obstacle{
    constructor(){
    this.positionX = 50;
    this.positionY = 100;
    this.width = 20;
    this.height = 10;
    this.domElement = null;

    this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveDown(){
        console.log("move down");
            this.positionY -= 10;
            this.domElement.style.bottom = this.positionY + "vh";
    }
}

const player = new Player();

const obstaclesArr = [];

setInterval(() => {
    const obstacleOne = new Obstacle();
    obstaclesArr.push(obstacleOne);
    console.log("one object");
}, 2000);

setInterval(() => {
        obstaclesArr.forEach( elem => {
            elem.moveDown();
        });
}, 200);

document.addEventListener("keydown", event => {
    if(event.key === "ArrowRight"){
        console.log("r");
        player.moveRight();
    } else if(event.key === "ArrowLeft"){
        console.log("l");
        player.moveLeft();
    }   
})