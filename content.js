(function() {
  // スクリプトの開始をログ出力
  console.log("実行を開始します");

  // 要素の表示・非表示を管理するフラグ
  let isHidden = false;

  // 要素の表示・非表示を切り替える関数を定義
  function toggleVisibility() {
    // 対象となるHTML要素を取得
    const elements = [
      ...document.querySelectorAll('.specificfeedback'), // 特定のフィードバック要素
      ...document.querySelectorAll('.icon.fa.fa-check.text-success.fa-fw'), // 正解アイコン
      ...document.querySelectorAll('.icon.fa.fa-remove.text-danger.fa-fw'), // 不正解アイコン
      ...document.querySelectorAll('.outcome.clearfix'), // 結果表示要素
      ...document.querySelectorAll('option[selected="selected"]') // 選択された<option>要素
    ];

    // 各要素の表示・非表示を切り替え
    elements.forEach(el => {
      if (isHidden) {
        el.style.display = ''; // 要素を表示
      } else {
        el.style.display = 'none'; // 要素を非表示
      }
    });

    // <option>要素の表示・非表示を切り替え
    const optionElements = document.querySelectorAll('option[selected="selected"]');
    optionElements.forEach(el => {
      if (isHidden) {
        el.style.visibility = ''; // 要素を表示
      } else {
        el.style.visibility = 'hidden'; // 要素を非表示
      }
    });

    // <option>要素のテキストを管理
    const optionElementsText = document.querySelectorAll('option[selected="selected"]');
    optionElementsText.forEach(el => {
      if (isHidden) {
        // 非表示状態から表示状態へ
        if (el.hasAttribute('data-original-text')) {
          el.textContent = el.getAttribute('data-original-text'); // テキストを復元
          el.removeAttribute('data-original-text');
        }
      } else {
        // 表示状態から非表示状態へ
        el.setAttribute('data-original-text', el.textContent); // 元のテキストを保存
        el.textContent = ''; // テキストを消す
      }
    });

    // ラジオボタンのchecked属性を管理
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(el => {
      if (isHidden) {
        // 非表示状態から表示状態へ
        if (el.hasAttribute('data-was-checked')) {
          el.setAttribute('checked', 'checked'); // チェックを復元
          el.removeAttribute('data-was-checked');
        }
      } else {
        // 表示状態から非表示状態へ
        if (el.hasAttribute('checked')) {
          el.setAttribute('data-was-checked', 'true'); // チェック状態を一時保存
          el.removeAttribute('checked'); // チェックを外す
        }
      }
    });

    // 表示状態のフラグを反転
    isHidden = !isHidden;
    // 現在の状態をログ出力
    console.log(isHidden ? "要素を隠しました。" : "要素を表示しました。");
  }

  // F2キーの押下を検知し、イベントリスナーを追加
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
      event.preventDefault(); // デフォルトのF2キーの動作を防止
      toggleVisibility(); // 表示・非表示を切り替え
    }
  });

  // スクリプトの終了をログ出力
  console.log("実行を終了します。");
})();