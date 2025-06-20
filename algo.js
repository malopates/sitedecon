const containers = Array.from(document.querySelectorAll('img.cat'));
function animate() {
    containers.forEach(el => {
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        el.style.position = 'relative';
        el.style.left = `${dx}px`;
        el.style.top = `${dy}px`;
    });
    setTimeout(animate, 1);
}


                    const phrases = [
                        "mange des céréales",
                        "regarde la pluie",
                        "écoute de la musique",
                        "danse dans la cuisine",
                        "joue avec un chat",
                        "dessine un poisson",
                        "boit du café",
                        "se noie"
                    ];

                    function typeWriter(text, i = 0) {
                        const el = document.getElementById('random-phrase');
                        if (i === 0) el.textContent = '';
                        if (i < text.length) {
                            el.textContent += text.charAt(i);
                            setTimeout(() => typeWriter(text, i + 1), 60);
                        }
                    }

                    function setRandomPhrase() {
                        const idx = Math.floor(Math.random() * phrases.length);
                        typeWriter(phrases[idx]);
                    }

                    setRandomPhrase();

                    setInterval(() => {
                        const el = document.getElementById('blink-underscore');
                        el.style.visibility = (el.style.visibility === 'hidden') ? 'visible' : 'hidden';
                    }, 500);

animate();

