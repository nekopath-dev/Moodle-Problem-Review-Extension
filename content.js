(function() {
  console.log("実行を開始します");

  let isHidden = false;

  function toggleVisibility() {
    // 1つ目と2つ目のHTML要素、および新しく追加された要素
    const elements = [
      ...document.querySelectorAll('.specificfeedback'),
      ...document.querySelectorAll('.icon.fa.fa-check.text-success.fa-fw'),
      ...document.querySelectorAll('.icon.fa.fa-remove.text-danger.fa-fw'),
      ...document.querySelectorAll('.outcome.clearfix')
    ];

    elements.forEach(el => {
      if (isHidden) {
        // 非表示状態から表示状態へ
        el.style.display = '';
      } else {
        // 表示状態から非表示状態へ
        el.style.display = 'none';
      }
    });

    // 3つ目のHTML要素（checked属性のみ）
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(el => {
      if (isHidden) {
        // 非表示状態から表示状態へ
        if (el.hasAttribute('data-was-checked')) {
          el.setAttribute('checked', 'checked');
          el.removeAttribute('data-was-checked');
        }
      } else {
        // 表示状態から非表示状態へ
        if (el.hasAttribute('checked')) {
          el.setAttribute('data-was-checked', 'true');
          el.removeAttribute('checked');
        }
      }
    });

    isHidden = !isHidden;
    console.log(isHidden ? "要素を隠しました。" : "要素を表示しました。");
  }

  // F2キーのイベントリスナーを追加
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
      event.preventDefault(); // デフォルトのF2キーの動作を防止
      toggleVisibility();
    }
  });

  console.log("実行を終了します。");
})();