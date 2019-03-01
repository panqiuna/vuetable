<template>
<table class="yi-table" border="1" cellspacing="0" cellpadding="0">
<theads></theads>
<tbdoys 
:price='price' 
:number='number'
:purchaser='purchaser'
:dealState='dealState'
:Received='Received'
:image='image'
:goodsName='goodsName'
:goodsSku='goodsSku'
:onClick='tableBtn'
:class="Changeable"
>
</tbdoys>
<!-- <tbdoys></tbdoys> -->
</table>
</template>
<script>
import theads from "../components/theadCom";
import tbdoys from "../components/tbdoyCom";
export default {
  props: {
    price: {
      type: [String, Number],
      default: ""
    },
    appendStyle: {
      type: String,
      default: ''
    },
    number: {
      type: [String, Number],
      default: "0"
    },
    purchaser: {
      type: [String, Number],
      default: ""
    },
    dealState: {
      type: [String, Number],
      default: ""
    },
    Received: {
      type: [String, Number],
      default: ""
    },
    image: {
      type: [String, Number],
      default: ""
    },
    goodsName: {
      type: [String, Number]
    },
    goodsSku: {
      type: [String, Number],
      default: ""
    },
    Changeable: {
      type: String,
      default: ""
    },
    tableBtn: {
      type: Function,
      default: event => {
        console.log("已经点击啦!");
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // tableBtn(){
    //   this.$emit('btnevent')
    // }
  },
  created() {},
  components: { theads, tbdoys }
};
</script>
<style lang="less" scoped>
.yi-table {
  border: 1px solid #eee;
  width: 1030px;
}
</style>

