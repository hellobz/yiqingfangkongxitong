<template>
  <div class="fankong">
    <div class="loading" v-if="isLoading">

        <!-- 头部导航条 -->
      <div class="header-loading">

      </div>

      <!-- 加载loading -->

      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>

    <!-- 组件 -->
    <div class="compon" v-else>
      <!-- 头部组件 -->
      <Header></Header>
      <Main></Main>
    </div>

  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Main from "../components/Main/Main.vue";
export default {
  name: "FangKong",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      isLoading: true,
    };
  },

  beforeCreate() {},

  created() {},

  mounted() {
      setTimeout(()=>{
          this.isLoading = false;
      },2100)
  },

  methods: {},
};
</script>

<style scoped>
.loading {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #232e6d;
  overflow-y: hidden;
}

/* 头部加载导航条 */

.header-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  border-top: 5px solid red;
  animation: navMove 7s;
}

@keyframes navMove {
  0% {
    width: 0;
  }
  20% {
    width: 30%;
  }
  50% {
    width: 60%;
  }
  70% {
    width: 63%;
  }
  85% {
    width: 75%;
  }
  95% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
}

/* 加载loading */
.spinner {
  width: 300px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #67cf22;
  height: 100%;
  width: 6px;
  display: inline-block;
  margin-right: 18px;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>