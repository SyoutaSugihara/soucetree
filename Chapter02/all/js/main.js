// $(function){
//　　ふたつめのパートが記述されている。
// });
// &(function){
//   $('セレクタ').css('プロパティ','値')
// });
// 　　何を　　　　どうするか   細かい設定
// (〇〇クラス)　(CSSとかを)　(色とかを)
$(function(){
  $('#typo').css('color','#ebc000');
});
$(function(){
  $('#typo .inner').css('transform' , 'rotate(10deg)');
});
// (＃typoと.inner) の (style) の (斜めに変える。)
$(function(){
  $('.page-main > div:nth-child(1) .inner').css('opacity',0.5);
});
// (.page-mainの中のdiv要素の1番目の.inner) の (style) の　(透明度５０％に変える。)
