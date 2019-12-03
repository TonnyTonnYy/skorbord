const container = document.getElementById("root");
container.style.width = window.innerWidth + "px";
container.style.height = window.innerHeight + "px";

const gameBox = document.getElementById("game-box");
if (gameBox !== undefined) gameBox.style.height = gameBox.clientHeight + "px";
