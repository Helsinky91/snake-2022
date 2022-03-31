
const canvas = document.getElementById('snake-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(38, 42, 38, 0.85)'
ctx.strokeRect((canvas.width / 2) - 400, 0, 800, 750)




ctx.fillText("SCORE: ", 250, 400)




