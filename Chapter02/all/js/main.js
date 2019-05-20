// ------------------chapter2 step1------------------
// ①
// $(function(){
//   $('#typo').css('color','#ebc000');
// });
// (#typo)　の　(style)　の　(色を#ebc000に変える。)
// ②
// $(function(){
//   $('#typo .inner').css('transform' , 'rotate(10deg)');
// });
// (＃typoと.inner) の (style) で (斜めに変える。)
// ③
// $(function(){
//   $('.page-main > div:nth-child(1) .inner').css('opacity',0.5);
// });
// (.page-mainの中のdiv要素の1番目の.inner)　の　(style)　の　(透明度５０％に変える。)
// ④
// $(function(){
//   $('#typo').css('font-size' , '50px');
//   $('#typo').css('background-color' , '#ae5e9b');
//   $('#typo').css('color' , '#ebc000');
// });
// 上の構文と同じ意味(省略系)
// ⑤
// $(function(){
//   $('#typo').css({
//     fontSize: '50px',
//     backgroundColor: '#ae5e9b',
//     color: '#ebc000'
//   })
// });
// (#typo)　の　(style)　の　(字のサイズ、背景色、文字の色を変える。)

// ------------------cyapter①　メモ------------------
// $()は「html要素を元にjquery独自の要素を生成する」機能がある。

// ブラウザがhtml最後まで読み込むのを待つための仕組み
// $(function(){
//   htmlがロードした後に実行する処理
// });

// 基本形
// $(function){
//   $('セレクタ').メソッド('プロパティ','値')
// });
// ↓命令対象　　↓命令文の内容
// $('#typo').css('color','#ebc000')
// ↓何々の　　　       ↓何々を　　　　　　 ↓ 変える , 詳細設定
// $(IDやclass etc.).(styleや動き etc.)('色や形 etc.' ,　'詳細設定')

// $()　　　→　付いていないものは「関数」
// .css()　→　命令文の前に「.」が付いているものは「メソッド」
// $(html要素).メソッド('引数１' , '引数２');
// 「.」jQとメソッドを繋ぐ役割、「;」JSの処理が終わったことを示す役割

// 略し方の変更点
// 「上と下の変更点での注意点」
// 「$(function){});」の中に「$('#typo'){})」を入れる。
// プロパティを挟んでいる「'」「'」は削除
// 「-」使用不可
// 「-」で繋げた部分の次の文字を大文字に変更
// 「;」で一文ずつ区切らず、「プロパティ・値」の後を「,」で区切る

// オブジェクトとは
// $function(){
//   この中に入っているものは一つのデータの塊として扱われる。
//   多数のCSSなどを指定しても、実際は一つとしてデータとして扱われる。
// });



// ------------------chapter2 step2------------------
// ①
// $(function(){
//   $('#typo').on('mouseover',function(){//  イベントタイプ
// // $('#typo')　に　('マウスオーバーしたら')
//     $('#typo').css('color','#ebc000');//  イベントハンドラ
// //   $('#typo')　の　(style)　の　(色を変える。)
//   });
// });
// ②
// $(function(){
//   $('#typo').on('click',function(){
// // $('#typo')　を　('クリックしたら')
//     $('#typo').css('backgroundColor','#ae5e9b');
// // $('#typo')　の　(style)　の　(色を変える。)
//     $('header').css('color','#ae5e9b');
//   });
// });
// ③
$(function(){
  $('#typo').on('mouseover',function(){
// $('#typo')　に　('マウスオーバーしたら')
    $('#typo').css({
      color: '#ebc000',
      backgroundColor: '#ae5e9b'
    });
// $('#typo')　の　(style)　の　('色と背景色を変える。')
  });
  $(function(){
    $('#typo').on('mouseout',function(){
// $('#typo')　に　('マウスアウトしたら')
      $('#typo').css({
        color: '#fff',
        backgroundColor: '#3498db'
      });
// $('#typo')　の　(style)　の　('色と背景色を変える。')
    });
  });
});
$(function(){
  $('#typo').on('mousedown',function(){
    // $('#typo')　に　('クリックボタンが押されている時')

    $('header').css({
      color: 'white',
      backgroundColor:'black',
    });
    $('h1').css('font-size' , '30px');
    // $('header')　の　(style)　の　('色、背景色、文字sizeを変える。')
  });

  $('#typo').on('mouseup',function(){
    // $('#typo')　に　('クリックボタンが離された時')
    $('header').css({
      color:'black',
      backgroundColor:'White',
    });
    // $('header')　の　(style)　の　('色と背景色、文字sizeを変える。')
    $('h1').css('font-size' , '20px');
  });
});


// ------------------cyapter②　メモ------------------
// 基本形
// $('セレクタ').on('イベントタイプ',function(){
// 　任意の処理
// });

// on.メソッドは特定の出来事が起こるタイミングに実行したい命令を設定するメソッド。
// on('イベントタイプ','イベントハンドラ');
// イベントの種類       →　イベントタイプ
// 実行したい命令(関数)  →　イベントハンドラ


// よく使うイベントメソッドでのタイミング
// 特定の要素をマウスオーバーしたタイミング
// 特定の要素をマウスアウトしたタイミング
// 特定の要素をクリックしたタイミング
// マウスが動いたタイミング
// ウィンドウのサイズが変わったタイミング
// スクロールしたタイミング

// mouseover :要素にマウスが乗った時
// mouseout  :要素からマウスが離れた時
// mousedown :要素上でクリックボタンが押された時
// mouseup   :要素上でクリックボタンが離された時
// mousemove :要素上でマウスが動かされた時
// click     :要素がクリックされた時
// dblckick  :要素がダブルクリックされた時
// keydown   :要素にフォーカスした状態で、キーボードのキーが押された時
// keyup     :要素にフォーカスした状態で、キーボードのキーを離された時
// focus     :要素にフォーカスが当たった時(フォーカスできる要素のみ)
// blur      :要素からフォーカスが外れた時(フォーカスできる要素のみ)
// change    :要素入力内容が変更された時(textarea、input、select要素など)
// resize    :要素がリサイズされた時
// scroll    :要素がスクロールされ時
