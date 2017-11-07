//ハンバーガーメニューを押すとメニューがスライド
$(function(){
  $("#jQueryPush").click(function(){
    $("#jQueryBox").slideToggle("10");
  });
});

//TOPへ戻るのボタン
// グローバル変数
var syncerTimeout = null;
// 一連の処理
$(function(){
  // スクロールイベントの設定
  $(window).scroll(function(){
    // 1秒ごとに処理
    if(syncerTimeout == null){
      // セットタイムアウトを設定
      syncerTimeout = setTimeout(function(){
        // 対象のエレメント
        var element = $('#page-top');
        // 現在、表示されているか？
        var visible = element.is(':visible');
        // 最上部から現在位置までの距離を取得して、変数[now]に格納
        var now = $(window).scrollTop();
        // 最下部から現在位置までの距離を計算して、変数[under]に格納
        var under = $('body').height() - (now + $(window).height());
        // 最上部から現在位置までの距離(now)が800以上かつ
        // 最下部から現在位置までの距離(under)が0px以上かつ…
        if(now >= 800 && 0 <= under){
          // 非表示状態だったら
          if(!visible){
            // [#page-top]をゆっくりフェードインする
            element.fadeIn('slow');
          }
        }
        // 800px以下かつ表示状態だったら
        else if(visible){
          // [#page-top]をゆっくりフェードアウトする
          element.fadeOut('slow') ;
        }
        // フラグを削除
        syncerTimeout = null;
      },1000);
    }
  });
  // クリックイベントを設定する
  $('#move-page-top').click(function(){
    // スムーズにスクロールする
    $('html,body').animate({scrollTop:0},'slow');
  });
});

//折り畳みメニューの式
$(function(){
  $("#folder-menu").click(function(){
    $("#folder-menu li").slideToggle("10");
    $(".fa-chevron-circle-down").toggleClass("kaiten");
  });
});

//メニューのアニメーション
$(function(){
  //ハンバーガーメニューのアニメーション
  $("#jQueryPush").on("click",function(){
    $("#jQueryPush").toggleClass("kaiten2");
  });
  $("#jQueryPush").one("click", function(){
    $(".navbar li:nth-child(1)").delay(500).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(2)").delay(1000).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(3)").delay(1500).animate({
      opacity: 1,
    },1000);
    $(".navbar li:nth-child(4)").delay(2000).animate({
      opacity: 1,
    },1000);  
  });
});

//767px以下属性変更twitter欄
$(window).on("load resize",function(){
  var screen_width = $(window).width();
  if (screen_width <= 767){
    $(".timeline a").attr("data-height","200");
  }
  if (screen_width >= 768){
    $(".timeline a").attr("data-height","400");
  }
});