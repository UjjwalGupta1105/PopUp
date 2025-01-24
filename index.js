(() => {
  let gameBox;
  let gameButton;

  const addGameBox = () => {
    gameBox = document.createElement("div");
    gameBox.id = "quiz-box";
    gameBox.innerHTML = `
      <div class="quiz-container-new">
        <h2 class="question">Do you want to play the game?</h2>
        <button id="confirm-yes" class="quiz-option">Yes</button>
        <button id="confirm-no" class="quiz-option">No</button>
      </div>
    `;

    document.body.appendChild(gameBox);

    addConfirmationListeners();
  };

  const addConfirmationListeners = () => {
    document.getElementById("confirm-yes").addEventListener("click", showGameContent);
    document.getElementById("confirm-no").addEventListener("click", closeGame);
  };

  const showGameContent = () => {
    gameBox.innerHTML = `
      <div class="quiz-container">
        <h2>Quiz Game</h2>
        <p id="quiz-question">Who was the First PM of India?</p>
        <button class="quiz-option">Rajendra Prasad</button>
        <button class="quiz-option">JawaharLal Nehru</button>
        <button class="quiz-option">Subhas Chandra Bose</button>
        <button class="quiz-option">Indira Gandhi</button>
        <div class="quiz-container-close">CLOSE</div>
      </div>
    `;

    document.querySelector(".quiz-container-close").addEventListener("click", closeGame);
    document.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.innerText === "JawaharLal Nehru") {
          alert("Correct!");
        } else if (!e.target.classList.contains("quiz-container-close")) {
          alert("Wrong answer!");
        }
      });
    });
  };

  const addGameButton = () => {
    gameButton = document.createElement("button");
    gameButton.id = "quiz-button";
    gameButton.innerText = "Play game";
    document.body.appendChild(gameButton);

    gameButton.addEventListener("click", askToPlay);
  };

  const askToPlay = () => {
    if (!gameBox) {
      addGameBox();
    } else {
      gameBox.innerHTML = `
        <div class="quiz-container-new">
          <h2>Do you want to play the game?</h2>
          <button id="confirm-yes" class="quiz-option quiz-option-new">Yes</button>
          <button id="confirm-no" class="quiz-option  quiz-option-new">No</button>
        </div>
      `;
      addConfirmationListeners();
    }
    gameBox.style.display = "block";
  };

  const closeGame = () => {
    if (gameBox) {
      gameBox.style.display = "none";
    }
  };

  const addStyling = () => {
    const styling = document.createElement("style");
    styling.innerHTML = `
      #quiz-box {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 450px;
        height: 350px; /* Fixed size for consistency */
        background: white;
        z-index: 100;
        border-radius: 16px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }
      .quiz-container {
        text-align: center;
        height: 100%; /* Ensures the content fits within the popup */
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .quiz-container h2 {
        margin-bottom: 10px;
        font-size: 22px;
      }
        .quiz-container-new h2 {
        margin-bottom: 30px;
        font-size: 28px;
      }
      .quiz-container-new{
      text-align: center;
        height: 100%; /* Ensures the content fits within the popup */
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .quiz-option {
        display: block;
        margin: 5px auto;
        padding: 8px 12px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 10px;
        background: #f7f7f7;
        font-size: 19px;
        width: 80%;
      }
        .quiz-option-new{
        margin: 7px auto;
        }
      .quiz-option:hover {
        background: #e0e0e0;
      }
      .quiz-container-close {
        margin-top: 15px;
        color: red;
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        top: 10px;
        right: 20px;
      }
      #quiz-button {
        position: fixed;
        bottom: 40px;
        right: 60px;
        z-index: 100;
        background: black;
        color: white;
        border: none;
        border-radius: 12px;
        width: 170px;
        height: 60px;
        font-size: 24px;
        font-weight: 550;
        cursor: pointer;
        box-shadow: 4px 4px 12px black;
        transition: all 0.5s;
      }
      #quiz-button:hover {
        transform: translateY(-3px);
      }
    `;
    document.head.appendChild(styling);
  };

  addStyling();
  addGameButton();
})();
