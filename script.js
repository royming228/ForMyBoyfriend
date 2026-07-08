// -------------------- СЕРДЦЕ ИЗ СЛОВ --------------------
const heartWords = [
    "  I     Love     You  ",
    " I   I Love You   I ",
    "  I  I Love You  I  ",
    "   I I Love You I   ",
    "    I  Love You I    ",
    "      I Love You      ",
    "       I Love         ",
    "        I Lo          ",
    "         I            "
   ];

const heartContainer = document.getElementById('heart');

// Создаём строки сердечка
heartWords.forEach((line, index) => {
    const div = document.createElement('div');
    div.className = 'heart-line';
    div.textContent = line;
    heartContainer.appendChild(div);
});

// Добавляем класс pulse через 3 секунды (после появления всех строк)
setTimeout(() => {
    heartContainer.classList.add('pulse');
}, 3000);

// -------------------- КЛИК ПО СЕРДЕЧКУ --------------------
const yesBtn = document.getElementById('yesBtn');

heartContainer.addEventListener('click', function() {
    // Показываем кнопку с эффектом
    yesBtn.style.display = 'inline-block';
    
    // Добавляем эффект конфетти (простой вариант)
    createConfetti();
    
    // Меняем текст
    document.querySelector('.subtitle').textContent = '💖 Ты бы стал моим парнем? 💖';
    
    // Убираем подсказку о клике (уже не нужно)
    this.style.cursor = 'default';
    
    // Убираем событие, чтобы нельзя было нажать повторно
    this.removeEventListener('click', arguments.callee);
});

// -------------------- КНОПКА "СОГЛАСНА" --------------------
yesBtn.addEventListener('click', function() {
    // Эффект взрыва сердечек
    createBigCelebration();
    
    // Меняем заголовок
    document.querySelector('.title').textContent = '❤️ Ты согласился! ❤️';
    document.querySelector('.subtitle').textContent = 'Я тебя очень люблю! 💕';
    
    // Скрываем кнопку
    this.style.display = 'none';
    
    // Меняем фон на более праздничный
    document.body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)';
});

// -------------------- ЭФФЕКТЫ --------------------
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6fb7'];
    const container = document.body;
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            pointer-events: none;
            animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        container.appendChild(confetti);
        
        // Удаляем после анимации
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function createBigCelebration() {
    // Большое количество сердечек
    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 30 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            pointer-events: none;
            animation: heartRise ${Math.random() * 3 + 2}s linear forwards;
            animation-delay: ${Math.random() * 1}s;
        `;
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// -------------------- ДОБАВЛЯЕМ КЛЮЧЕВЫЕ КАДРЫ ДЛЯ КОНФЕТТИ --------------------
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes heartRise {
        0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
        }
        20% {
            opacity: 1;
            transform: translateY(20vh) scale(1) rotate(10deg);
        }
        100% {
            transform: translateY(-10vh) scale(1.5) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
