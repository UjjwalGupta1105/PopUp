(()=>{
    let gameBox;
    let gameButton;

  const addGameBox = () => {
    gameBox = document.createElement('div');
    gameBox.id = 'quiz-box';
    gameBox.innerHTML = `
      <div class="quiz-container">
        <h2>Quiz Game</h2>
        <p id="quiz-question">Who was First PM of India?</p>
        <button class="quiz-option">Rajendra Prasad</button>
        <button class="quiz-option">JawaharLal Nehru</button>
        <button class="quiz-option">Shubhas Chandra Bose</button>
        <button class="quiz-option">Indra Gandhi</button>
        <div class="quiz-container-close">CLOSE</div>
      </div>
    `;

    document.body.appendChild(gameBox);

  
    document.querySelector('.quiz-container-close').addEventListener('click', closeGame);
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.innerText === 'JawaharLal Nehru') {
          alert('Correct!');
        } else {
          alert('Wrong answer!');
        }
      });
    });
  };

  const addGameButton = () => {
    gameButton = document.createElement('button');
    gameButton.id = 'quiz-button';
    gameButton.innerText = 'Play game';
    document.body.appendChild(gameButton);

    gameButton.addEventListener('click', showGame);
  };

  const showGame = () => {
    if (!gameBox) {
      addGameBox();
    }
    gameBox.style.display = 'block';
  };

  const closeGame = () => {
    if (gameBox) {
      gameBox.style.display = 'none';
    }
  };

 const AddStyling=()=>{
    const styling = document.createElement('style');
    styling.innerHTML = `
      #quiz-box {
        display: none;
        position: fixed;
         position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 450px;
        height: auto;
        background: white;
        z-index: 100;
        border-radius: 16px;
      }
        .quiz-container {
        padding: 20px;
        text-align: center;
        border:1px solid black;
        border-radius:12px;
        transition:all 0.5s;
      }
         .quiz-container:hover {
         box-shadow: 1px 1px 8px black;
      }

      #quiz-question{
        margin-bottom: 20px;
        font-size:22px;
      }

      .quiz-option {
        display: block;
        margin: 5px auto;
        padding: 8px 12px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 10px;
         background: #f7f7f7;
        font-size:19px;
        width:80%
      }

      .quiz-option:hover {
        background: #e0e0e0;
      }

      .quiz-container-close {
        margin-top: 15px;
        color: red;
        cursor: pointer;
        text-decoration: underline;
        position:absolute;
        top:20px;
        right:40px;
      }

      #quiz-button {
        position: fixed;
        bottom: 40px;
        right: 60px;
        z-index:100;
        background: black;
        color: white;
        border: none;
        border-radius: 12px;
        width: 170px;
        height: 60px;
        font-size: 24px;
        font-weight:550;
        cursor: pointer;
        box-shadow: 4px 4px 12px black;
        transition:all 0.5s;
      }

      #quiz-button:hover {
       transform:translateY(-3.05px);
      }
        `
        document.head.appendChild(styling);
 }

AddStyling()
addGameButton()

})()