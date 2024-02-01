const feedbackBtns = document.querySelectorAll('.feedback-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');

feedbackBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    alert('Спасибо за ваше сообщение!');
    document.getElementById('feedback-form').reset();
    modalOverlay.style.display = 'none';
});