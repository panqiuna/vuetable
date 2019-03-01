<template>
<div>
  <span>table</span>
  <tableCome 
  :price='price' 
  :number='number'
  :listArr='listArr'
:purchaser='purchaser'
:dealState='dealState'
:Received='Received'
:image='image'
:goodsName='goodsName'
:goodsSku='goodsSku'
:tableBtn='hahha'
appendStyle='conrainer'
></tableCome>
</div> 
</template>
<script>
import tableCome from "../components/index";
export default {
  name: "HelloWorld",
  data() {
    return {
      listArr: [],
      price: "$9",
      number: "3",
      purchaser: "cc",
      dealState: "代发货",
      Received: "$100",
      image:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2408475050,2694658228&fm=27&gp=0.jpg",
      goodsName: "哈哈",
      goodsSku: "13*13，绿色"
    };
  },
  methods: {
    hahha() {
      console.log("潘秋娜");
    }
  },
  components: { tableCome }
};
</script>
<style scoped>
</style>
