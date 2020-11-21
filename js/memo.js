
  // 1.Save クリックイベント
  $("#save").on("click", function () {

    // val()で値を取得する
    const key = $("#key").val();
    const value = $("#memo").val();
    // html側で入力されたデータを取得して確認
    console.log(key)
    console.log(value)
    // データを保存する
    // localStorage.setItem(xx, xx);
    localStorage.setItem(key, value);

    //経路検索


    //一覧表示に追加(テンプレートリテラルを使う)
    const html = `
    <li>
      <span>${key}</span>
      <span>${value}</span>
    </li>`
    // htmlに埋め込む
    $("#list").append(html);

    $("#key").val("");
    $("#memo").val("");

    $("#key").attr('placeholder', 'ここにタイトルが入ります');
    $("#memo").attr('placeholder', 'ここにテキストが入ります');

  });

  //2.clear クリックイベント
  $("#clear").on('click', function () {
    // 保存されたデータ（localStorage）を消す
    localStorage.clear();
    // 削除するときに、入力されている中身を空にする

    //id="list"を削除する
    $("#list").empty();

  });


  //3.ページ読み込み：保存データ取得表示
  for (let i = 0; i < localStorage.length; i++) {
    // 保存されたデータのkeyを取得
    const key = localStorage.key(i);

    // 何が入っているか確認してみよう☺️
    console.log(key);

    // getItemのKeyを使って保存されたデータを全部取得
    const value = localStorage.getItem(key);

    // 何が入っているか確認してみよう☺️
    const html = `
    <li>
      <span>${key}</span>
      <span>${value}</span>
    </li>`

    // htmlに埋め込む
    $("#list").append(html);
  }

  //音声入力
  let speech = new webkitSpeechRecognition();

  $("#button_k").on('click', function () {
    speech.start();
    $("#key").attr('placeholder', 'どうぞお話しください');
    speech.onresult = function (event) {
      speech.stop();      
      if (event.results[0].isFinal) {
        key.value = event.results[0][0].transcript;
      }
    } 
  });

  $("#button_v").on('click', function () {
    speech.start();
    $("#memo").attr('placeholder', 'どうぞお話しください');
    speech.onresult = function (event) {
      speech.stop();      
      if (event.results[0].isFinal) {
        memo.value = event.results[0][0].transcript;
      }
    } 
  });


