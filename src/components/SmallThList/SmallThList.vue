<template>
  <!-- 底部底部区域 -->
  <div class="m-l-b-bot">
    <!-- 头部区域 -->
    <div class="m-bb-top">
      <div
        :class="[
          'm-bb-contain',
          item2.id === 1 ? 'white-marg' : 'other',
          isOthC ? 'other-color' : '',
        ]"
        :style="
          item2.id === 4
            ? 'color: green;'
            : '' || item2.id === 3
            ? 'color: yellow;'
            : '' || item2.id === 2
            ? 'color: red;'
            : ''
        "
        v-for="item2 in lsmaList"
        :key="item2.id"
      >
        {{ item2.txt }}
      </div>
    </div>

    <!-- :style="isMinHeight ? 'height:400px;' : ''" -->
    <!-- 信息区域 -->
    <div class="m-bb-info" :class="isMinHeight ? 'isminheight' : ''">
      <div :class="['bb-wrap', isStopAnimation ? 'stop-animation' : '']">
        <!-- 大栏组成 -->
        <!-- 小栏区域  -->

        <div class="mbbinfo-lan" v-for="item3 in lscroinfo" :key="item3.id">
          <!-- 白色区域 -->
          <!-- background-color: #3DE976; -->
          <!-- isMyBg ? 'width:70px;height: 27px;text-align: center;line-height: 27px;': '' -->
          <div
            class="mbbinfo-gid common-float"
            :class="isWhiteClass ? 'impClass' : ''"
            style="color: #fff; font-size: 15px"
            :style="
              item3.gid == '异常'
                ? 'background-color: red;width:70px;height: 27px;text-align: center;line-height: 27px;'
                : '' || item3.gid == '正常'
                ? 'background-color: #3DE976;width:70px;height: 27px;text-align: center;line-height: 27px;'
                : ''
            "
          >
            {{ item3.gid }}
          </div>

          <!-- 红色区域 -->
          <div
            class="mbbinfo-rnum common-weight common-float"
            :class="isWhiteClass ? 'impClass' : ''"
            style="color: red; font-size: 18px"
          >
            {{ item3.rnum }}
          </div>

          <!-- 黄色区域 -->
          <div
            class="mbbinfo-hnum common-weight common-float"
            :class="isWhiteClass ? 'impClass' : ''"
            style="color: yellow; font-size: 20px"
          >
            {{ item3.hnum }}
          </div>

          <!-- 绿色区域 -->
          <div
            class="mbbinfo-lnum common-weight common-float"
            style="color: green; font-size: 22px; text-align: center"
            :style="isWd ? 'width: 110px;' : ''"
            :class="isWhiteClass ? 'impClass' : ''"
          >
            {{ item3.lnum }}
          </div>
        </div>

        <!-- <div
                class="mbbinfo-lan"
                v-for="item4 in scrollInfo"
                :key="item4.id"
              > -->
        <!-- 白色区域 -->
        <!-- <div
                  class="mbbinfo-gid common-float"
                  style="color: #fff; font-size: 15px"
                >
                  {{ item4.gid }}
                </div> -->

        <!-- 红色区域 -->
        <!-- <div
                  class="mbbinfo-rnum common-weight common-float"
                  style="color: red; font-size: 18px"
                >
                  {{ item4.rnum }}
                </div> -->

        <!-- 黄色区域 -->
        <!-- <div
                  class="mbbinfo-hnum common-weight common-float"
                  style="color: yellow; font-size: 20px"
                >
                  {{ item4.hnum }}
                </div> -->

        <!-- 绿色区域 -->
        <!-- <div
                  class="mbbinfo-lnum common-weight common-float"
                  style="color: green; font-size: 22px"
                >
                  {{ item4.lnum }}
                </div> -->

        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "lsmaList",
    "lscroinfo",
    "isMinHeight",
    "isOthC",
    "isWd",
    "isMyBg",
    "isWhiteClass",
  ],
  data() {
    return {
      isStopAnimation: false,
      ll: "2000px",
    };
  },

  mounted() {
    var that = this;
    document.onkeyup = function (e) {
      e = e || window.event;
      if (e.keyCode === 76) {
        // alert('按下了此件');
        // scrollLate.style.transform = 'translateY(0px)';
        var scrollLate = document.querySelector(".m-bb-info");
        var scrollLate2 = document.querySelector(".isminheight");
        scrollLate2.style.height = "400px";
        scrollLate2.style.maxHeight = "400px";
        if (that.isStopAnimation) {
          scrollLate2.style.overflow = "hidden";
        } else {
          scrollLate2.style.overflowY = "scroll";
        }
        that.isStopAnimation = !that.isStopAnimation;
      } else if (e.keyCode === 17) {
        // alert('按下了我');
      }
      //调式键盘keyCode值
      // alert(e.keyCode);
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.m-l-b-bot {
  // .m-bb-top
  background-color: #0c1e5c;
  .m-bb-top {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 20px;

    .other-color {
      color: #1694c4 !important;
    }

    .white-marg {
      color: white;
    }

    .m-bb-contain {
      font-size: 17px;
      font-weight: 600;
    }
  }

  .m-bb-info {
    height: 600px;
    // background-color: violet;
    overflow: hidden;
    // overflow-y: auto;
    padding: 0 7px;
    box-sizing: border-box;

    .bb-wrap {
      //   position: relative;
      height: 200%;
      // background-color: yellow;
      animation: gotop 14s linear infinite;
      animation-fill-mode: forwards;
      transform: translateY(600px);
      @keyframes gotop {
        0% {
          transform: translateY(600px);
        }
        100% {
          transform: translateY(-1800px);
        }
      }

      .impClass {
        color: #fff !important;
      }

      .mbbinfo-lan {
        //   background-color:
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
        margin-bottom: 30px;
        // .mbbinfo-gid {
        //   margin-right: 51px;
        // }

        // .common-float {
        //   float: left;
        // }

        .common-weight {
          font-weight: 600;
          //   margin-right: 31px;
        }
      }
    }
  }

  // 不同高度
  .isminheight {
    height: 400px;
  }
}

// 停止动画
.stop-animation {
  //   position: relative;
  height: 200%;
  // background-color: yellow;
  animation: gotop 0s linear infinite !important;
  animation-fill-mode: forwards;
  transform: translateY(0px) !important;
  @keyframes gotop {
    0% {
    }
    100% {
    }
  }

  animation-duration: 0s !important;
}
</style>