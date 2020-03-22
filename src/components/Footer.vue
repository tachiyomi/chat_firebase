<template>
  <footer>
    <nav class="navbar">
      <div class="container-fluid">
        <a type="button" class="navbar-brand underLine" @click="$router.push('/')">Tachiyomi</a>

        <a type="button" class="moveup-a" @click="moveup"><i class="fas fa-arrow-up"></i></a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    methods: {
      moveup: function(){
        const duration = 1000;  // 移動速度（1秒で終了）
            const interval = 25;    // 0.025秒ごとに移動
            const step = -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
            const timer = setInterval(() => {
                window.scrollBy(0, step);   // スクロール位置を移動
                if(window.scrollY <= 0) {
                    clearInterval(timer);
                }
            }, interval);
      }
    }
}
</script>

<style scoped>
footer{
  background-color: #D7EDA6;
  border-top: solid 1px #39183D;
  border-bottom: solid 1px #39183D;
}

a, button{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a:link, a:visited, a:hover, a:active {
  color: #39183D;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

a.underLine {
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: .3s;
}
a.underLine::after {
  position: absolute;
  bottom: 14%;
  left: 50%;
  content: '';
  width: 0;
  height: 2px;
  background-color: #39183D;
  transition: .5s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
a.underLine:hover::after {
  width: 100%;
}

.container-fluid{
  vertical-align: baseline;
}

.moveup-a{
    padding: 1% 10%;
    border: solid 1px #39183D;
    border-radius: 10px;
    background-color: #E8F5CB;
    text-align: center;
}
</style>
