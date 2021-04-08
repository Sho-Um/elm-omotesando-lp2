$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#header,#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});


//ローディング画面
$(window).on('load',function(){    
    $("#youtube-area").addClass('appear');
    $("#loading").addClass('disappear');
});

//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player('youtube', {//動画を表示させたいIDを指定
    videoId: 'XxDMREvuoOA',//動画のアドレスの指定
    playerVars: {
        playsinline: 1,// インライン再生を行う
        autoplay:1,//自動再生を行う
        fs:0,//全画面表示ボタンを表示しない    
        rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
        controls: 0,// プレーヤー コントロールを表示しない
        modestbranding: 1, // YouTubeロゴの非表示
        iv_load_policy: 3, // アノテーションの非表示
        start:50,//50秒後から動画がスタート
    },    
    events: {//イベント
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});
}

//ミュートにしてから再生する設定
function onPlayerReady(event) {
event.target.mute();
event.target.playVideo();
}


//ループ設定
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
event.target.playVideo();
}
}


//logoの表示
$(window).on('load',function(){
	$("#splash").delay(2750).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
