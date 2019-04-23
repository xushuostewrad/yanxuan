<template>
  <div class="app">
    <div class="header">
      <van-search placeholder="搜索商品, 共22220款好物" v-model="value"/>
    </div>
    <div class="home-sale">
      <ul class="brand">
        <li class="brand__item" v-for="item in 20" :key="item">推荐专区</li>
      </ul>
      <ul class="product">
        <img class="product-green"
          src="https://yanxuan.nosdn.127.net/4529dbe6b4a627fe7cf8e530b3b95533.jpg?imageView&thumbna"
          alt
          srcset
        >
        <li class="product__item" v-for="item in 20" :key="item">
          <img
            src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quali"
            alt
            srcset
          >
          <span>员工精选</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Api from './api'
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  created () {
    this.getData()
    console.log(api.CATE_NAV_API)
  },
  methods: {
    getData () {
      axios.get(
        Api.HOME_CATE_API
      ).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.header {
  height: 56px;
  border-bottom: 1px solid #eee;
}
.home-sale {
  display: flex;
  height:100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  .brand{
    flex-shrink: 0;
    width:86px;
    height: 100%;
    border-right:1px solid #ececec;
    overflow-y: auto;
    &__item{
      height:32px;
      line-height:32px;
      text-align: center;
      margin:20px 0;

      &:hover{
        border-left:3px solid red;
         color:red;
      }
    }
  }
  .product{
    flex:1;
    height:100%;
    overflow-y: auto;
    padding:10px 10px;
    &-green{
      height:100%;
    }
    &__item{
     display: flex;
     align-items:center;
     flex-direction: column;
     float:left;
     width:33%;
     height:100px;
     overflow: hidden;
     padding:15px 0;

     img{
       display: block;
       height:85px;
       width:85px;
     }
     span{
       display: block;
       font-size:12px;
        text-align: center;
     }
    }
  }
}
</style>
