<template>
    <thead>
        <tr class="yi-tr" :style="{background:color}">
            <th v-for="(item,index) in list" :key="index">{{item}}</th>
        </tr>
    </thead>
</template>
<script>
export default {
  props: {
    // headStyle:{
    //   type:String,
    //   default:function(){
    //     return ''
    //   }
    // },
    color: {
      type: String,
      default: "#f5f5f5"
    },
    list: {
      type: Array,
      default: function() {
        if ([].length == 0) {
          return ["商品描述", "单价", "数量", "买家", "交易状态", "实收"];
        } else {
          return [];
        }
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: {}
};
</script>
<style lang="less" scoped>
.yi-tr {
  height: 60px;
  text-align: center;
  background: #eeeeee;
  th {
    border: 1px solid #f5f5f5;
  }
  th:nth-child(1) {
    width: 385px;
  }
}
</style>


