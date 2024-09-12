const container = document.getElementById('container');
const anchorImage = document.getElementById('anchor');
let rect = container.getBoundingClientRect();

let anchorX = rect.x+(rect.width/2);
let anchorY = rect.y+(rect.height/2);

const yOffset = container.clientHeight/7;

// to do - don't make cursor positions relative to window but to the container

document.addEventListener('mousemove', (e)=>{
    const pos = {x: e.clientX, y: e.clientY};

    const x = pos.x-anchorX;
    const y = (pos.y-anchorY)+yOffset;

    console.log({x, y})
    
    const radiansAngle = Math.atan2(y, x);
    const degreesAngle = (180/Math.PI) * radiansAngle;

    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');

    leftEye.style.transform = `rotate(${degreesAngle}deg)`;
    rightEye.style.transform = `rotate(${degreesAngle}deg)`;
    
});


container.addEventListener('mousemove', (e)=>{
    rect = container.getBoundingClientRect();
    anchorX = rect.x+(rect.width/2);
    anchorY = rect.y+(rect.height/2);
});