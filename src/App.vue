<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {

  background: url(./assets/bg/bg.jpg) no-repeat 0 0 /cover;
  /* background-size: cover; */
}
#app {
  min-width: 1815px;
  width: 100%;
}
</style>
