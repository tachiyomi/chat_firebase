<template>
<div id="app">
  <div class="container-fluid">

    <h1>はじめに</h1>
    <div class="content">
      こんにちは。立ち読みと申します。<br>
      C++でOpensiv3dを使用してゲームを作成していました。
      過去の作品はこちらをご覧ください<a href="https://wce.jp/works/?tag=%E7%AB%8B%E3%81%A1%E8%AA%AD%E3%81%BF" target="_blank"><i class="fas fa-external-link-alt"></i></a>
    </div>

    <h1>このサイトについて</h1>
    <div class="content">
      このサイトはJavascriptを学ぶために作成しました。
      GitHubPagesを利用して公開しています。
      よくわからない公開チャットルームもあるのでぜひ書きこんでいってください。<br>
      また、サイトに関して何かございましたらご連らくください<a href="https://twitter.com/tatiyomi_wce" target="_blank">@tatiyomi_wce<i class="fas fa-external-link-alt"></i></a>
    </div>

    <h1>使用したフレームワーク等</h1>
    <div class="content">
      Vue.js<a href="https://jp.vuejs.org/index.html" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
      dayjs<a href="https://www.npmjs.com/package/dayjs" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
      Bootstrap<a href="https://getbootstrap.com/" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
      FontAwesome<a href="https://fontawesome.com/" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
      Firebase<a href="https://firebase.google.com/?hl=ja" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
      バナナスリップ<a href="http://ymnk-design.com/%E3%83%90%E3%83%8A%E3%83%8A%E3%82%B9%E3%83%AA%E3%83%83%E3%83%97/" target="_blank"><i class="fas fa-external-link-alt"></i></a><br>
    </div>

  </div>
</div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>
#app{
  background-color: #F5F4D5;
  text-align: left;
}

.container-fluid{
  margin-bottom: auto;
  font-size: 100%;
  display:inline-block;
}

h1 {
  position: relative;
  margin: 0%;
}
h1:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(to right, rgb(230, 90, 90), transparent);
  background: linear-gradient(to right, rgb(230, 90, 90), transparent);
}

.content{
  margin-left: 2.5%;
  padding: 0.5em 0;
}
</style>
