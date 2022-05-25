<template>
     <!-- 底部头部区域 -->
        <div class="m-l-b-top" :style="isMarR?'margin-right: 20px;': ''">
          <div class="mar-pos" v-for="item1 in lthrelist || mthrelist" :key="item1.id">
            <div
              class="m-l-bt-c"
              v-if="item1.id === 1"
              style="color: red; font-size: 17px; font-weight: 700"
            >
              <div style="margin-bottom: 5px">{{ item1.num }}</div>
              <div>{{ item1.txt }}</div>
            </div>

            <div
              class="m-l-bt-c"
              v-else-if="item1.id === 2"
              style="color: yellow; font-size: 18px; font-weight: 700"
            >
              <div style="margin-bottom: 5px">{{ item1.num }}</div>
              <div>{{ item1.txt }}</div>
            </div>

            <div class="m-l-bt-c" v-else style="color: green; font-weight: 700">
              <div style="font-size: 22px; margin-bottom: 5px">
                {{ item1.num }}
              </div>
              <div style="font-size: 18px">{{ item1.txt }}</div>
            </div>

          </div>
          
        </div>
</template>

<script>
    export default {
        name: 'ThreeList',
        props: ['lthrelist','mthrelist','isMarR'],
        data(){
            return {

            }
        },

        mounted(){

        },

        methods: {

        }

    }
</script>

<style scoped lang="less">
    
      .m-l-b-top {
        background-image: linear-gradient(to right,#051258,#010A67);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .mar-pos {
          margin: 20px 0;
          padding-left: 20px;
          box-sizing: border-box;

         
        .m-l-bt-c {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        }
        
      }

</style>