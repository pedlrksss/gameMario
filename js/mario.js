const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('#score');
let score = 0;
let loop;


// Função responsável por simular o salto do personagem Mario
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

// Função chamada quando ocorre uma colisão entre o Mario e o cano
const gameOver = () => {
  // Remove as animações do cano e do Mario
  pipe.style.animation = 'none';
  mario.style.animation = 'none';

  

  // Ajusta a posição do cano
  pipe.style.left = `${pipe.offsetLeft}px`;

  // Altera a imagem do Mario para exibir uma imagem de "game over"
  mario.src = 'mario-jump-images/game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';

  // Para o loop principal do jogo
  clearInterval(loop);
};

// Função responsável por atualizar a pontuação
const updateScore = () => {
  score++;
  scoreElement.textContent = score;
};

// Função que verifica se ocorreu uma colisão entre o Mario e o cano
const checkCollision = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    // Chama a função gameOver se houve colisão
    gameOver();
  } else {
    // Caso contrário, atualiza a pontuação
    updateScore();
  }
};

// Função que inicia o loop principal do jogo
const gameLoop = () => {
  // Chama a função checkCollision a cada 10 milissegundos
  loop = setInterval(checkCollision, 10);
  
};

// Evento de teclado que chama a função jump ao pressionar uma tecla
document.addEventListener('keydown', jump);


// Inicia o loop principal do jogo
gameLoop();
