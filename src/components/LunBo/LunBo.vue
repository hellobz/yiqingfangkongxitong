<template>
  <div class="lunbo">
    <div class="wrap" id="wrap">
      <ul id="pic">
        <li><img src="../../../public/1.webp" alt="" /></li>
        <li><img src="../../../public/2.webp" alt="" /></li>
        <li><img src="../../../public/3.webp" alt="" /></li>
        <li><img src="../../../public/4.webp" alt="" /></li>
        <li><img src="../../../public/5.webp" alt="" /></li>
      </ul>
      <ol id="list">
        <li class="on">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "LunBo",
  data() {
    return {};
  },

  methods: {},

  mounted() {
      var wrap = document.getElementById("wrap"),
        pic = document.getElementById("pic").getElementsByTagName("li"),
        list = document.getElementById("list").getElementsByTagName("li"),
        index = 0,
        timer = null;
        // console.log(list,'listlistlist');
      // 定义并调用自动播放函数
      timer = setInterval(autoPlay, 1500);
      // 鼠标划过整个容器时停止自动播放
      wrap.onmouseover = function () {
        clearInterval(timer);
      };
      // 鼠标离开整个容器时继续播放至下一张
      wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 1500);
      };
      // 遍历所有数字导航实现划过切换至对应的图片
      for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function () {
          clearInterval(timer);
          index = this.innerText - 1;
          changePic(index);
        };
      }
      function autoPlay() {
        if (++index >= pic.length) index = 0;
        changePic(index);
      }
      // 定义图片切换函数
      function changePic(curIndex) {
        for (var i = 0; i < pic.length; ++i) {
          pic[i].style.display = "none";
          // console.log(pic,'pcicpicici');
          list[i].className = "";
        }
        pic[curIndex].style.display = "block";
        list[curIndex].className = "on";
      }
  },
};
</script>

<style scoped lang="less">
.wrap {
  height: 370px;
  width: 430px;
  overflow: hidden;
  position: relative;
}
.wrap ul {
  position: absolute;
  list-style: none;
}
.wrap ul li {
  width: 490px;
  height: 370px;
  // background-color: chocolate !important;
}
.wrap ol {
  list-style: none;
  position: absolute;
  right: 5px;
  bottom: 10px;
}
.wrap ol li {
  height: 20px;
  width: 20px;
  background: #ccc;
  border: solid 1px #666;
  margin-left: 5px;
  color: #000;
  float: left;
  line-height: center;
  text-align: center;
  cursor: pointer;
}
.wrap ol .on {
  background: #e97305;
  color: #fff;
}
</style>