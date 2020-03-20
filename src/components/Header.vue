<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <a type="button" class="navbar-brand underLine" @click="$router.push('/')">Tachiyomi</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a type="button" class="nav-link underLine" @click="$router.push('/')">Home</a>
          </li>
          <li class="nav-item">
            <a type="button" class="nav-link underLine" @click="$router.push('/todolist')">LIST I wanna do</a>
          </li>
          <li class="nav-item">
            <a type="button" class="nav-link underLine" @click="$router.push('/chatroom')">CHAT</a>
          </li>
          <li class="nav-item">
            <a type="button" class="nav-link" @click="$router.push('/signin')"><i class="fas fa-wrench"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
header{
  background-color: #D7EDA6;
  border-bottom: solid 1px #39183D;
}

.container ul{
  flex-direction: row;
}

.container li{
  margin-left: 80px;
}

a:link, a:visited, a:hover, a:active {
  color: #39183D;
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
</style>
