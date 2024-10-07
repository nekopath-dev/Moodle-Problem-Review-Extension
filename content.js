(function() {
  console.log("実行を開始します");

  const startTime = Date.now();

  function removeElements() {
    try {
      // 1つ目のHTML要素を削除
      const specificFeedbacks = document.querySelectorAll('.specificfeedback');
      specificFeedbacks.forEach(el => el.remove());

      // 2つ目のHTML要素を削除（正解アイコン）
      const correctIcons = document.querySelectorAll('.icon.fa.fa-check.text-success');
      correctIcons.forEach(el => el.remove());

      // 不正解アイコンを削除
      const incorrectIcons = document.querySelectorAll('.icon.fa.fa-remove.text-danger');
      incorrectIcons.forEach(el => el.remove());

      // 3つ目のHTML要素の属性を削除
      const checkedInputs = document.querySelectorAll('input[type="radio"][checked="checked"]');
      checkedInputs.forEach(el => el.removeAttribute('checked'));

      // 経過時間をチェック
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < 1000) {
        // 1秒経過していない場合、再度実行
        requestAnimationFrame(removeElements);
      } else {
        console.log("実行を終了します。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  }

  // 初回実行
  requestAnimationFrame(removeElements);

  // 1秒後に強制終了
  setTimeout(() => {
    console.log("1秒が経過したため、実行を終了します。");
  }, 1000);
})();