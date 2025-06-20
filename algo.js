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

            const toggle = document.getElementById('mode-toggle');
            let flou = false;
            toggle.addEventListener('click', () => {
            flou = !flou;
            document.body.style.filter = flou ? 'blur(6px)' : 'none';
            toggle.textContent = flou ? 'flou MODE 🌙' : 'flou MODE ☀️';
            });

 function updateDateTime() {
                        const now = new Date();
                        const jours = ["DIMANCHE", "LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"];
                        const mois = ["JANV", "FÉV", "MARS", "AVRIL", "MAI", "JUIN", "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉCE"];
                        const jour = jours[now.getDay()];
                        const date = now.getDate();
                        const moisNom = mois[now.getMonth()];
                        const dateStr = `${jour} ${date} <span style="color: orange;">${moisNom}</span>`;
                        document.getElementById('live-date').innerHTML = dateStr;

                        const h = String(now.getHours()).padStart(2, '0');
                        const m = String(now.getMinutes()).padStart(2, '0');
                        const s = String(now.getSeconds()).padStart(2, '0');
                        document.getElementById('live-time').textContent = `${h}:${m}:${s}`;
                    }
                    setInterval(updateDateTime, 1000);
                    updateDateTime();