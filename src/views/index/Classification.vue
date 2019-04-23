<template>
  <div class="app">
    <div class="header">
      <van-search placeholder="搜索商品, 共22220款好物" v-model="value"/>
    </div>
    <div class="home-sale">
      <van-badge-group  class="brand" :active-key="activeKey" @change="onChange">
        <van-badge class="brand__item" v-for="(item,index) in list" v-on:click="fn(index)"    :key="item.id" :title="item.name" />
      </van-badge-group>
      <!-- <ul class="brand">
        <li class="brand__item" v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>-->
      <ul class="product">
        <img
          class="product-green"
          src="https://yanxuan.nosdn.127.net/4529dbe6b4a627fe7cf8e530b3b95533.jpg?imageView&thumbna"
          alt
          srcset
        >
        <li class="product__item" v-for="item in list[id].subCateList" :key="item">
          <img
            :src="item.bannerUrl"
            alt
            srcset
          >
          <span>{{ item.frontName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { api, request } from "../../api/index.js";
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      activeKey: 0,
      id:0
    };
  },
   methods: {
    onChange(key) {
      this.activeKey = key;
      console.log(this)
    },
    fn(index){
        this.id=index;
        console.log(this.list[index])
    }
  },
  created() {
    // console.log(api)
    request.get(api.HOST + api.CATE_NAV_API).then(res => {
      let result = res.data;
      this.list = result.data;
      console.log(this.list);

    });
    // this.getData()
    // console.log(api.CATE_NAV_API)
  },

};
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
.van-badge__text{
  line-height: 0;
  &:hover{
    color:red;
  }
}
.home-sale {
  display: flex;
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
  .brand {
    flex-shrink: 0;
    width: 86px;
    border-right: 1px solid #ececec;
    overflow-y: auto;
    &__item {
      height: 32px;
      line-height: 32px;
      text-align: center;

      &.active {
        border-left: 3px solid red;
        color: red;
      }
    }
  }
  .product {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 10px 10px;
    &-green {
      height: 100%;
    }
    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      float: left;
      width: 33%;
      height: 100px;
      overflow: hidden;
      padding: 15px 0;

      img {
        display: block;
        height: 85px;
        width: 85px;
      }
      span {
        display: block;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>
