



const toggle = document.getElementById('mode-toggle');
let flou = false;
if (toggle) {
    toggle.addEventListener('click', () => {
        flou = !flou;
        document.body.style.filter = flou ? 'blur(2px)' : 'none';
        toggle.style.filter = 'none';
        toggle.textContent = flou ? ' remettre les lunettes' : 'retirer les lunettes';
    });
}


const miiImg = document.getElementById('mii-img');
function switchMii() {
    if (miiImg && !muted) {
        const n = Math.floor(Math.random() * 3) + 1;
        miiImg.src = `img/mii/${n}.png`;
    }
}
setInterval(switchMii, 100);

const treat = document.getElementById('treat');
if (treat) {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    treat.style.position = 'absolute';
    treat.style.cursor = 'grab';

    treat.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - treat.offsetLeft;
        offsetY = e.clientY - treat.offsetTop;
        treat.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            treat.style.left = (e.clientX - offsetX) + 'px';
            treat.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            treat.style.cursor = 'grab';
            document.body.style.userSelect = '';
        }
    });
}

let muted = false;
const muteBtn = document.getElementById('mute-btn');
const speechBubble = document.querySelector('.speech-bubble');
if (muteBtn) {
    muteBtn.onclick = function() {
        muted = !muted;
        // Change button content to use mute.png or unmute.png
        const imgSrc = muted ? 'img/unmute.png' : 'img/mute.png';
        this.innerHTML = `<img src="${imgSrc}" alt="${muted ? 'Unmute' : 'Mute'}" style="height:1em;vertical-align:middle;">`;
        if (speechBubble) {
            speechBubble.style.display = muted ? 'none' : '';
        }
    };
    // Set initial icon
    muteBtn.innerHTML = `<img src="img/mute.png" alt="Mute" style="height:1em;vertical-align:middle;">`;
}


const fishEls = Array.from(document.querySelectorAll('[id^="fish"]'));
fishEls.forEach(fish => {
    fish.style.position = 'absolute';
    const maxX = window.innerWidth - fish.offsetWidth;
    const maxY = window.innerHeight - fish.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    fish.style.left = `${x}px`;
    fish.style.top = `${y}px`;
});
fishEls.forEach(fish => {
    let direction = Math.random() < 0.5 ? 1 : -1;
    let speed = 0.5 + Math.random() * 0.1;
    let x = parseFloat(fish.style.left) || 0;
    let y = parseFloat(fish.style.top) || 0;
    let baseY = y;
    let maxX = window.innerWidth - fish.offsetWidth;
    let angle = 0;
    let angleStep = 0.01 + Math.random() * 0.01;
    let angleAmplitude = 10 + Math.random() * 3;
    let verticalStep = 0.003 + Math.random() * 0.002; 
    let verticalAmplitude = 12 + Math.random() * 30; // pixels

    function moveFish() {
        x += direction * speed;
        if (x <= 0) {
            direction = 1;
            fish.style.transform = 'scaleX(-1)';
        } else if (x >= maxX) {
            direction = -1;
            fish.style.transform = 'scaleX(1)';
        }
        fish.style.left = `${x}px`;

        // Swimming rotation
        angle += angleStep;
        const rotate = Math.sin(angle) * angleAmplitude;
        // Combine scale and rotate
        const scale = direction === 1 ? -1 : 1;

        // Vertical movement
        let verticalAngle = angle * verticalStep / angleStep;
        let yOffset = Math.sin(verticalAngle) * verticalAmplitude;
        fish.style.top = `${baseY + yOffset}px`;

        fish.style.transform = `scaleX(${scale}) rotate(${rotate}deg)`;

        requestAnimationFrame(moveFish);
    }

    fish.style.transform = direction === 1 ? 'scaleX(-1)' : 'scaleX(1)';
    moveFish();
});
