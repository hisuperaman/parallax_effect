// colored particles

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = canvas.scrollWidth;
const CANVAS_HEIGHT = canvas.height = canvas.scrollHeight;

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDecimal(min, max){
    return (Math.random() * (max - min)) + min;
}

const mouse = {
    x: undefined,
    y: undefined
};

const particles = [];
const minParticleSize = 0.2;
const numberOfParticles = 10;

let hue = 0;

document.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    init()

})

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;

        this.size = getRandomInteger(2, 10);

        this.speedX = getRandomDecimal(-2, 2);
        this.speedY = getRandomDecimal(-2, 2);

        this.color = `hsl(${hue}, 100%, 50%)`;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.size > minParticleSize){
            this.size -= minParticleSize;
        }
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}

function init(){
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
    }
}

function handleParticles(){
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        particle.update();
        particle.draw(ctx);

        if(particle.size <= minParticleSize){
            particles.splice(i, 1);
            i--;
        }
    }
}


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    handleParticles();


    hue = (hue + 1) % 360;

    requestAnimationFrame(animate);
}

animate();