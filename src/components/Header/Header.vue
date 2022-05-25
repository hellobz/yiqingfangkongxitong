<template>
  <div class="header">
    <!-- 左侧部分 -->
    <div class="h-left">
      <!-- 左侧的左侧部分 -->
      <div class="h-l-left">小旋疫情防控展示系统</div>
      <!-- 左侧的右侧部分 -->
      <div class="h-l-right">
        <div id="w-top" class="common-time"></div>
        <div id="w-bot" class="common-time"></div>
      </div>
    </div>

    <!-- 右侧部分 -->
    <div class="h-right">
      <!-- 右侧内容区域 -->
      <div class="h-r-content" v-for="item in headerContent" :key="item.id">
        <!-- 图标区域 -->
        <span></span>
        <!-- 文字区域 -->
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // 头部内容
      headerContent: [
        {
          id: 1,
          text: "信息详情",
        },
        {
          id: 2,
          text: "文件配置",
        },
        {
          id: 3,
          text: "疫情状况",
        },
      ],
    };
  },

  mounted() {
    var wtop = document.getElementById("w-top");

    // 封装格式化日期方法
    function formatDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      var day = date.getDay();

      var currentDate = "";

      currentDate += year + "-";
      if (month < 10) {
        currentDate += "0" + month + "-";
      } else {
        currentDate += month + "-";
      }

      if (dates < 10) {
        currentDate += "0" + dates;
      } else {
        currentDate += dates;
      }

      var arr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];

      var nowdate = currentDate + " " + arr[day];

      wtop.innerHTML = nowdate;

      // return currentDate
    }

    formatDate();

    setInterval(formatDate, 1000);

    //获取节点

    // var curdate = formatDate(year, month, dates);

    var wbot = document.getElementById("w-bot");
    var div = document.createElement("div");

    //封装格式化时分秒方法
    function getTimer() {
      var time = new Date();
      var h = time.getHours();
      h = h < 10 ? "0" + h : h;
      var m = time.getMinutes();
      m = m < 10 ? "0" + m : m;
      var s = time.getSeconds();
      s = s < 10 ? "0" + s : s;
      div.innerHTML = h + ":" + m + ":" + s;
      wbot.append(div);
      return getTimer;
    }
    // getTimer();

    // 补0逻辑是小于10 就填0拼接

    setInterval(getTimer(), 1000);
  },

  methods: {},
};
</script>

<style scoped lang="less">
.header {
  height: 95px;
  background-image: linear-gradient(to right,#11152E,#161C57);
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;

  .h-left {
    // background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h-l-left {
    //   background: chocolate;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #1694c4;
      margin-right: 20px;
    }

    .h-l-right {
      #w-top {
        margin-top: 10px;
        margin-left: 50px;
      }

      #w-bot {
        margin-top: 5px;
        margin-left: 80px;
      }

      .common-time {
        font-size: 22px;
        font-weight: 600;
        color: #519bdc;
      }

    }

  }

    .h-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .h-r-content {
            width: 85px;
            height: 34px;
            border-radius: 17px;
            background-color: #41C0EB;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            margin-right: 10px;
        }
    }

}
</style>