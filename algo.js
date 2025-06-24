const containers = Array.from(document.querySelectorAll('img.dog'));
function animate() {
    containers.forEach(el => {
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        el.style.position = 'relative';
        el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    requestAnimationFrame(animate);
}



setInterval(() => {
    const el = document.getElementById('blink-underscore');
    if (el) {
        el.style.visibility = (el.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }
}, 500);

animate();

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

const chatImg = document.getElementById('chat-img');
if (chatImg) {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    chatImg.style.position = 'absolute';
    chatImg.style.cursor = 'grab';

    chatImg.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - chatImg.offsetLeft;
        offsetY = e.clientY - chatImg.offsetTop;
        chatImg.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            chatImg.style.left = (e.clientX - offsetX) + 'px';
            chatImg.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            chatImg.style.cursor = 'grab';
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
    let speed = 1 + Math.random() * 2;
    let x = parseFloat(fish.style.left) || 0;
    let maxX = window.innerWidth - fish.offsetWidth;

    function moveFish() {
        x += direction * speed;
        if (x <= 0) {
            direction = 1;
            fish.style.transform = 'scaleX(1)';
        } else if (x >= maxX) {
            direction = -1;
            fish.style.transform = 'scaleX(-1)';
        }
        fish.style.left = `${x}px`;
        requestAnimationFrame(moveFish);
    }
    // Flip image if going left
    fish.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)';
    moveFish();
});