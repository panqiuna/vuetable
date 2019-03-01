<!--<template>
    <tbody>
        <tr class="yi-tditem">
            <td>
                <imgCom :image='image' :goodsName='goodsName' :goodsSku='goodsSku'></imgCom>
            </td>
            <td>{{price}}</td>
            <td>{{number}}</td>
            <td>{{purchaser}}</td>
            <td @click="onClick($vent)">{{dealState}}
           
            </td>
            <td>{{Received}}</td>
        </tr>
    </tbody>
</template>
<script>
// import imgCom from "../components/imgCom";
// export default {
//   name:'tbdoyCom',
//   props: {
//     price: [String, Number],
//     number: [String, Number],
//     purchaser: String,
//     dealState: String,
//     Received: [String, Number],
//     image: String,
//     goodsName: String,
//     goodsSku: String,
//     // onClick: {
//     //   type: Function,
//     //   default: event => {
//     //     console.log("You have clicked me!");
//     //   }
//     // }
//   },
//   data() {
//     return {};
//   },
//   methods: {
//     onClick(e){
//     this.$emit('btnevent')
//     }
//   },
//   created() {},
//   components: {imgCom}
// };
// </script>
// <style lang="less" scoped>
// .yi-tditem {
//   td:nth-child(1) {
//     width: 385px;
//   }
//   td {
//     text-align: center;
//     width: 100px;
//     border: 1px solid #eee;
//   }
//   td:nth-child(5) {
//     cursor: pointer;
//   }
// }
// </style>-->

<template>
    <tbody>
        <tr class="yi-tditem" v-for="(item,index) in listArr" :key="index">
            <td>
                <imgCom :image='image' :goodsName='goodsName' :goodsSku='goodsSku'></imgCom>
            </td>
            <td>{{price}}</td>
            <td>{{number}}</td>
            <td>{{purchaser}}</td>
            <td @click="onClick()">{{dealState}}</td>
            <td>{{Received}}</td>
        </tr>
    </tbody>
</template>
<script>
import imgCom from "../components/imgCom";
export default {
  name: "tbdoyCom",
  props: {
    listArr: {
      type: Array,
      default: function() {
        return [
          {
            image: String,
            goodsName: String,
            goodsSku: String
          }
        ];
      }
    },
    price: [String, Number],
    number: [String, Number],
    purchaser: String,
    dealState: String,
    Received: [String, Number],
    image: String,
    goodsName: String,
    goodsSku: String,
    onClick: {
      type: Function,
      default: event => {
        console.log("You have clicked me!");
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  components: { imgCom }
};
</script>
<style lang="less" scoped>
.yi-tditem {
  td:nth-child(1) {
    width: 385px;
  }
  td {
    text-align: center;
    width: 100px;
    border: 1px solid #eee;
  }
  td:nth-child(5) {
    cursor: pointer;
  }
}
</style>