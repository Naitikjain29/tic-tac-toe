let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMsg = document.querySelector("#winner-msg");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      box.style.color = turnO ? "#00ffcc" : "#ff6f61";
      turnO = !turnO;
      box.disabled = true;
      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      winnerMsg.innerText = `🎉 Winner: ${val1}`;
      boxes[a].classList.add("winner");
      boxes[b].classList.add("winner");
      boxes[c].classList.add("winner");
      disableAll();
      return;
    }
  }

  // Check for draw
  if ([...boxes].every(box => box.innerText !== "")) {
    winnerMsg.innerText = "It's a Draw!";
  }
};

const disableAll = () => {
  boxes.forEach(box => box.disabled = true);
};

resetBtn.addEventListener("click", () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("winner");
  });
  turnO = true;
  winnerMsg.innerText = "";
});
