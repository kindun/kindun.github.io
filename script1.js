document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".tag");
  const squares = document.querySelectorAll(".square");

  // ドラッグ開始時
  tags.forEach((tag) => {
    tag.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text", event.target.id);
    });
  });

  // 各スクエアに対して、ドラッグオーバーとドロップを処理
  squares.forEach((square) => {
    square.addEventListener("dragover", (event) => {
      event.preventDefault(); // ドロップを許可
    });

    square.addEventListener("drop", (event) => {
      event.preventDefault(); // ドロップ後のデフォルト動作を防ぐ
      const draggedElementId = event.dataTransfer.getData("text"); // ドラッグした要素のIDを取得
      const draggedElement = document.getElementById(draggedElementId); // 要素を取得
      square.appendChild(draggedElement); // ドロップした場所に要素を追加
    });
  });
});


function showInput(NUM) {
  const output = document.getElementById("output" + NUM);
  const value = document.getElementById("input" + NUM).value;
  output.textContent = value;
  document.getElementById("input" + NUM).style.display = "none";
  document.getElementById("button" + NUM).style.display = "none";
  document.getElementById("delete" + NUM).style.display = "inline";
}

function deleteInput(NUM) {
  const input = document.getElementById("input" + NUM);
  input.style.display = "inline";
  input.value = "";
  document.getElementById("button" + NUM).style.display = "inline";
  document.getElementById("delete" + NUM).style.display = "none";
  document.getElementById("output" + NUM).textContent = "";
}

let count = 4;

function add() {
  const tags = document.querySelector(".tag");
  const newTag = tags.cloneNode(true);
  
  count++; // カウンタをインクリメント
  const newIdBase = count; // 新しいIDの番号を取得
  newTag.id = newIdBase;
  console.log(newTag.id);
  // 複製したdiv内のIDを変更
  const elements = newTag.querySelectorAll("[id]");
  elements.forEach(element => {
    const oldId = element.id;
    console.log(oldId);
    const newId = oldId.replace(/\d+/, newIdBase); // 数字部分を新しいIDに置き換え
    console.log(newId);
    element.id = newId; // IDを変更
  });

  document.getElementById("input").appendChild(newTag);
}
