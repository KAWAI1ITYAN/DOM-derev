let users = [
    {id:1,name: 'аделина', surname:'вагизова', grade: '23'},
    {id:2,name: 'wedefdg', surname:'sfdqewsefdg', grade: '34'},
    {id:3,name: 'настя', surname:'рудько', grade: '23'},
    {id:4,name: 'радмир', surname:'wfd', grade: '5'},
    {id:5,name: 'вап', surname:'авпр', grade: '1'},
    {id:6,name: 'привет', surname:'кепа', grade: '54'},
]

let winningNumbers = [2, 3];
let timer;
let timeLeft = 15;

let elem = document.querySelector('.list');
let timerDisplay = document.getElementById('timer');

for (let user of users) {
    elem.insertAdjacentHTML('beforeend',
    `
        <div class="card" id="${user.id}" onclick="checkWin(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
        </div>
    `
    );
}

function updateTimerDisplay() {
    timerDisplay.textContent = `осталось ${timeLeft} сек`;
}

function checkWin(id) {
    clearTimeout(timer);
  
    if (winningNumbers.includes(id)) {
      alert('Вы выиграли!');

      let cards = document.querySelectorAll('list');
  
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          card.style.display = 'none';
        });
      });
    } else {
      alert('Не та карточка!');
    }
}

function gameEnded() {
    alert('Время истекло.');
}

function countdown() {
    updateTimerDisplay();

    if (timeLeft > 0) {
        timeLeft--;
        timer = setTimeout(countdown, 1000);
    } else {
        gameEnded();
    }
}

countdown();