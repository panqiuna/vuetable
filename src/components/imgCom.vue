<template>
    <div class="imgCom">
    <div class="imgContainer">
        <img :src="image" alt="">
    </div>
    <div class="textContainer">
        <span class="goodsNmae ">{{goodsName}}</span>
        <span class="goodsSize">{{goodsSku}}</span>
    </div>
    </div>
</template>
<script>
export default {
  props: {
    goodsName: {
      type: String,
      default: ""
    },
    goodsSku: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
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
.imgCom {
  display: flex;
  padding: 10px 0 10px 35px;
  .imgContainer {
    flex: 3;
    width: 90px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .textContainer {
    flex: 9;
    padding-left: 10px;
    text-align: left;
    .goodsNmae {
      display: block;
    }
  }
}
</style>

