<template>
  <div class="main">
    <!-- 左侧部分 -->
    <div class="m-left">
      <!-- 头部区域 -->
      <div class="m-l-top">
        <span class="m-l-t-l"></span>
        <span class="m-l-t-r">疫情防控人数统计数据</span>
      </div>

      <!-- 底部区域 -->
      <div class="m-l-b">
        <ThreeList :lthrelist="threeList"></ThreeList>
        <SmallThList
          :lsmaList="smallThreeList"
          :lscroinfo="scrollInfo"
        ></SmallThList>
      </div>
    </div>

    <!-- 中间部分 -->
    <div class="m-main">
      <!-- 上面部分 -->
      <div class="mmain-top">
        <!-- 左边部分 -->
        <div class="mmaint-left">
          <!-- 上面部分 -->
          <div class="mml-top">
            <ThreeList :mthrelist="mthrelist" :isMarR="isMarRight"></ThreeList>
          </div>
          <!-- 下面部分 -->
          <div class="mml-bot">
            <LunBo></LunBo>
          </div>
        </div>

        <!-- 右边部分 -->
        <div class="mmaint-right">
          <SmallThList
            :lsmaList="msmallThreeList"
            :lscroinfo="mssInfo"
            :isMinHeight="isHeight"
            :isOthC="isOtherClass"
            :isWd="isWidth"
            :isMyBg="isBg"
            :isWhiteClass="isWClass"
          ></SmallThList>
        </div>
      </div>

      <!-- 下边部分 -->
      <div class="mmain-bot">
        <div id="maina" style="width: 600px; height: 400px"></div>
      </div>
    </div>

    <!-- 右侧部分 -->
    <div class="m-right">
      <div id="main" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import LunBo from "../LunBo/LunBo.vue";
import ThreeList from "../ThreeList/ThreeList.vue";
import SmallThList from "../SmallThList/SmallThList.vue";
export default {
  name: "Main",
  components: {
    ThreeList,
    SmallThList,
    LunBo,
  },
  data() {
    return {
      isMarRight: true,
      //不一样高度
      isHeight: true,
      //三码情况
      threeList: [
        {
          id: 1,
          num: 0,
          txt: "红码",
        },
        {
          id: 2,
          num: 0,
          txt: "黄码",
        },
        {
          id: 3,
          num: 3896,
          txt: "绿码",
        },
      ],

      // 中间三码情况
      mthrelist: [
        {
          id: 1,
          num: 0,
          txt: "红码",
        },
        {
          id: 2,
          num: 0,
          txt: "黄码",
        },
        {
          id: 3,
          num: 4254,
          txt: "绿码",
        },
      ],

      //小三码情况
      smallThreeList: [
        {
          id: 1,
          txt: "工号",
        },
        {
          id: 2,
          txt: "红码",
        },
        {
          id: 3,
          txt: "黄码",
        },
        {
          id: 4,
          txt: "绿码",
        },
      ],

      //中小三码情况
      isOtherClass: true,
      msmallThreeList: [
        {
          id: 1,
          txt: "状态",
        },
        {
          id: 2,
          txt: "姓名",
        },
        {
          id: 3,
          txt: "手机号",
        },
        {
          id: 4,
          txt: "所属部分",
        },
      ],

      //宽度
      isWidth: true,
      // 背景
      isBg: true,
      // 类名
      isWClass: true,
      //中滚动信息
      mssInfo: [],

      //滚动信息
      //   scrollInfo: [],
      scrollInfo: [
        {
          id: 1,
          gid: 1807,
          rnum: 0,
          hnum: 0,
          lnum: 40,
        },
        {
          id: 2,
          gid: 1833,
          rnum: 0,
          hnum: 0,
          lnum: 50,
        },
        {
          id: 3,
          gid: 1837,
          rnum: 0,
          hnum: 0,
          lnum: 58,
        },
        {
          id: 4,
          gid: 1839,
          rnum: 0,
          hnum: 0,
          lnum: 55,
        },
        {
          id: 5,
          gid: 1877,
          rnum: 0,
          hnum: 0,
          lnum: 64,
        },
        {
          id: 6,
          gid: 1883,
          rnum: 0,
          hnum: 0,
          lnum: 54,
        },
        {
          id: 7,
          gid: 1854,
          rnum: 0,
          hnum: 0,
          lnum: 85,
        },
        {
          id: 8,
          gid: 1882,
          rnum: 0,
          hnum: 0,
          lnum: 35,
        },
        {
          id: 9,
          gid: 1833,
          rnum: 0,
          hnum: 0,
          lnum: 50,
        },
        {
          id: 10,
          gid: 1859,
          rnum: 0,
          hnum: 0,
          lnum: 67,
        },
        {
          id: 11,
          gid: 1809,
          rnum: 0,
          hnum: 0,
          lnum: 77,
        },
        {
          id: 12,
          gid: 1972,
          rnum: 0,
          hnum: 0,
          lnum: 75,
        },
        {
          id: 13,
          gid: 1905,
          rnum: 0,
          hnum: 0,
          lnum: 64,
        },
        {
          id: 14,
          gid: 1803,
          rnum: 0,
          hnum: 0,
          lnum: 78,
        },
        {
          id: 15,
          gid: 1990,
          rnum: 0,
          hnum: 0,
          lnum: 90,
        },
        {
          id: 16,
          gid: 1841,
          rnum: 0,
          hnum: 0,
          lnum: 67,
        },
        {
          id: 17,
          gid: 1837,
          rnum: 0,
          hnum: 0,
          lnum: 58,
        },
        {
          id: 18,
          gid: 1839,
          rnum: 0,
          hnum: 0,
          lnum: 55,
        },
        {
          id: 19,
          gid: 1877,
          rnum: 0,
          hnum: 0,
          lnum: 64,
        },
        {
          id: 20,
          gid: 1883,
          rnum: 0,
          hnum: 0,
          lnum: 54,
        },
        {
          id: 21,
          gid: 1854,
          rnum: 0,
          hnum: 0,
          lnum: 85,
        },
        {
          id: 22,
          gid: 1882,
          rnum: 0,
          hnum: 0,
          lnum: 35,
        },
        {
          id: 23,
          gid: 1833,
          rnum: 0,
          hnum: 0,
          lnum: 50,
        },
        {
          id: 24,
          gid: 1859,
          rnum: 0,
          hnum: 0,
          lnum: 67,
        },
        {
          id: 25,
          gid: 1809,
          rnum: 0,
          hnum: 0,
          lnum: 77,
        },
        {
          id: 26,
          gid: 1972,
          rnum: 0,
          hnum: 0,
          lnum: 75,
        },
        {
          id: 27,
          gid: 1905,
          rnum: 0,
          hnum: 0,
          lnum: 64,
        },
        {
          id: 28,
          gid: 1803,
          rnum: 0,
          hnum: 0,
          lnum: 78,
        },
        {
          id: 29,
          gid: 1990,
          rnum: 0,
          hnum: 0,
          lnum: 90,
        },
        {
          id: 30,
          gid: 1841,
          rnum: 0,
          hnum: 0,
          lnum: 67,
        },
      ],
    };
  },

  mounted() {
    // let id = 1;
    // let lum = Math.floor(Math.random() * 50 + 40);
    //   let gid = Math.floor(Math.random()* 1000 + 1800);
    //   this.scrollInfo.push({
    //     id: id,
    //     gid: gid,
    //     rnum: 0,
    //     hnum: 0,
    //     lnum: lum,
    //   });
    // timer = setInterval(() => {
    //   let lum = Math.floor(Math.random() * 50 + 40);
    //   let gid = Math.floor(Math.random() * 1000 + 1800);
    //   this.scrollInfo.push({
    //     id: id,
    //     gid: gid,
    //     rnum: 0,
    //     hnum: 0,
    //     lnum: lum,
    //   });
    //   id++;
    // }, 1000);

    // echarts
    var myChart = this.echarts.init(document.getElementById("main"));
    var myChart1 = this.echarts.init(document.getElementById("maina"));

    var colors = ["#5470C6", "#EE6666"];

    var option = {
      color: colors,

      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["人员情况2021", "活动情况2021"],
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "人员情况  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2021-1",
            "2021-03",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
            "2021-08",
          ],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "活动情况 " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          data: [
            "2021-1",
            "2021-03",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
            "2021-08",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "人员情况2021",
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: "活动情况2021",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
            0.7,
          ],
        },
      ],
    };

    var colors1 = ["#5470C6", "#91CC75", "#EE6666"];

    // var option1Data = [];

    var option1 = {
      color: colors1,

      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        right: "20%",
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["信息收集", "活动情况", "天气情况"],
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "信息",
          min: 0,
          max: 250,
          position: "right",
          axisLine: {
            show: true,
            lineStyle: {
              color: colors1[0],
            },
          },
          axisLabel: {
            formatter: "{value}",
          },
        },
        {
          type: "value",
          name: "人员",
          min: 0,
          max: 250,
          position: "right",
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors1[1],
            },
          },
          axisLabel: {
            formatter: "{value}",
          },
        },
        {
          type: "value",
          name: "温度",
          min: 0,
          max: 25,
          position: "left",
          axisLine: {
            show: true,
            lineStyle: {
              color: colors1[2],
            },
          },
          axisLabel: {
            formatter: "{value} °C",
          },
        },
      ],
      series: [
        {
          name: "信息收集",
          type: "bar",
          // data: option1Data
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
        {
          name: "活动情况",
          type: "bar",
          yAxisIndex: 1,
          // data: option1Data
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: "天气情况",
          type: "line",
          yAxisIndex: 2,
          // data: option1Data
          data: [
            2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);

    var option1Data = [
      2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2
    ];

    // var option1Data = [
    //   2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
    // ];

    var option2Data = [
      2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2
    ];

    // var option2Data = [
    //   2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
    // ];

    // setInterval(()=>{
    //   option1Data = option1Data.map(item=>{
    //     return item = (Math.random()*161+2).toFixed(1)
    //   })
    // },1000)
    function show() {
      // console.log('shoshoshoshow');
      option1Data = option1Data.map((item) => {
        return (item = (Math.random() * 161 + 2).toFixed(1));
      });
      myChart1.setOption({
        color: colors1,

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "20%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["信息收集", "活动情况", "天气情况"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "信息",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors1[0],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "人员",
            min: 0,
            max: 250,
            position: "right",
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors1[1],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors1[2],
              },
            },
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "信息收集",
            type: "bar",
            data: option1Data,
            // data: [
            //   2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
            // ],
          },
          {
            name: "活动情况",
            type: "bar",
            yAxisIndex: 1,
            data: option1Data,
            // data: [
            //   2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            // ],
          },
          {
            name: "天气情况",
            type: "line",
            yAxisIndex: 2,
            // data: option1Data
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      });
    }
    setInterval(show, 1000);

    function shoshow() {
      option2Data = option2Data.map((item) => {
        return (item = (Math.random() * 161 + 2).toFixed(1));
      });

      myChart.setOption({
        color: colors,

        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["人员情况2021", "活动情况2021"],
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "人员情况  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: [
              "2021-1",
              "2021-03",
              "2021-03",
              "2021-04",
              "2021-05",
              "2021-06",
              "2021-07",
              "2021-08",
            ],
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "活动情况 " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: [
              "2021-1",
              "2021-03",
              "2021-03",
              "2021-04",
              "2021-05",
              "2021-06",
              "2021-07",
              "2021-08",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "人员情况2021",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            emphasis: {
              focus: "series",
            },
            // data: [
            //   2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            // ],
            data: option2Data,
          },
          {
            name: "活动情况2021",
            type: "line",
            smooth: true,
            emphasis: {
              focus: "series",
            },
            // data: [
            //   3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
            //   0.7,
            // ],
            data: option2Data,
          },
        ],
      });
    }

    setInterval(shoshow, 1000);

    let arr = [
      "王先生",
      "张先生",
      "卢美女",
      "关美女",
      "刘美女",
      "唐美女",
      "马先生",
      "曹先生",
      "蔡美女",
      "郑先生",

      "吴美女",
      "陈美女",
      "赵美女",
      "钱先生",
      "董先生",
      "孙先生",
      "周先生",
      "左美女",
      "倪美女",
      "西先生",
      "龙先生",
      "朱先生",
      "易先生",
      "我先生",
      "由美女",
      "瓦先生",
      "哈先生",
      "拉美女",
      "说先生",
      "下美女",
    ];
    let phoneArr = [
      "18777035515",
      "19099253177",
      "16630521158",
      "13400217795",
      "18800993155",
      "13100342425",
      "13300335535",
    ];
    phoneArr = phoneArr.map((item) => {
      let sphone = item.slice(3, 8);
      return item.replace(sphone, "*****");
    });
    let mgzArr = [
      "保安",
      "医生",
      "互联网",
      "设计师",
      "护士",
      "教师",
      "销售",
      "业务员",
      "个体经营",
      "自由职业",
      "公务员",
      "美妆",
    ];
    // console.log(phoneArr);

    let gidStausArr = ["正常", "异常"];

    for (let i = 0; i < 30; i++) {
      this.mssInfo.push({
        id: i + 1,
        // gid: "",
        gid: gidStausArr[Math.floor(Math.random() * gidStausArr.length)],
        rnum: arr[Math.floor(Math.random() * 30)],
        hnum: phoneArr[Math.floor(Math.random() * phoneArr.length)],
        lnum: mgzArr[Math.floor(Math.random() * mgzArr.length)],
      });
    }
  },

  methods: {},
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  .m-left {
    width: 275px;
    height: 700px;
    padding: 5px 15px;
    box-sizing: border-box;
    // background-color: red;

    .m-l-top {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      box-sizing: border-box;
      background-color: #152e7e;
      .m-l-t-l {
        display: block;
        float: left;
        width: 4px;
        margin-top: 10px;
        height: 20px;
        margin-right: 9px;
        background-color: #4aa5ff;
      }

      .m-l-t-r {
        font-size: 18px;
        color: #4aa5ff;
        font-weight: 600;
      }
    }

    .m-l-b {
      height: 400px;
      //   background-color: yellow;
      // .m-l-b-bot
    }
  }
  .m-main {
    width: 955px;
    position: relative;
    .mmain-top {
      display: flex;
      .mmaint-left {
        flex: 1;
        .mml-bot {
          position: absolute;
          top: 110px;
          left: 4px;
          width: 450px;
          height: 390px;
          padding: 10px;
          box-sizing: border-box;
          // background-color: #eee;
          border: 4px solid #ccc;
        }
      }

      .mmaint-right {
        flex: 1;
        // width: 400px;
      }
    }

    .mmain-bot {
      width: 930px;
      height: 240 px;
      background-color: #eee;
      margin-top: 90px;
    }
    // background-color: blue;
  }
  .m-right {
    width: 600px;
    height: 700px;
    background-color: #eee;
  }
}
</style>