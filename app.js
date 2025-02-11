window.activated = false;

        function showMessage() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('buttons').style.display = 'none';
            document.getElementById('message').style.display = 'block';
            window.activated = true;
            changeGif('img/heart.gif'); // Cambia el GIF a uno especial cuando dice "Sí"
            startHeartConfetti();

            
        }

        function moveButton() {
            const button = document.querySelector('.no');
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 100);
            button.style.position = "absolute";
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }

        function changeGif(src) {
            if (window.activated){
                document.getElementById('gif').src = 'img/heart.gif';
            } else {
                document.getElementById('gif').src = src;
            }
        }

        function startHeartConfetti() {
            const confetiContainer = document.getElementById("confetiContainer");

            for (let i = 0; i < 200; i++) {
                
                const confeti = document.createElement("img");
                confeti.className = "confeti";
                confeti.src = 'img/kokoro1.png';
                confeti.style.left = Math.random() * 100 + "vw";
                //confeti.style.backgroundColor = getRandomColor();
                confeti.style.animationDuration = Math.random() * 1 + 0.5 + "s";
                confetiContainer.appendChild(confeti);

                setTimeout(() =>{
                    confeti.remove();
                }, 10000)
            }

        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        