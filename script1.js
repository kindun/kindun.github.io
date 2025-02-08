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

