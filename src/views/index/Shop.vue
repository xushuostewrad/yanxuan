<template>
  <div class="app">
      <div class="header">
        <span class="header-car">购物车</span>
        <span class="header-juan" @click="fn" >领劵</span>
      </div>
      <div class="main">
          <div class="main-nav">
            <span>。30天无忧退货</span>
            <span>。48小时快速退款</span>
            <span>。满88元免邮费</span>
          </div>
          <div class="main-pic">
            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
              <p>点我去添加点什么</p>
          </div>
          <div class="main-login">
            <span @click="fn">登录</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn: function () {
      location.href = '/#/center'
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
  height: 45px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  &-car{
    font-size:18px;
    margin-left:20px;
  }
  &-juan{
    color:red;
     margin-right:20px;
  }
}
.main{
  background:#eee;
  height:573px;
  &-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;

    span{
      font-size:14px;
      color:rgb(131, 121, 121);
    }
  }
  &-pic{
      width:148px;
      margin:0 auto;
      margin-top:150px;
      margin-bottom:20px;
    img{
      width:100%;
      height:148px;
    }
    p{
      font-size:12px;
      color:rgb(131, 121, 121);
      text-align: center;
    }
  }
  &-login{
    width:248px;
    height:50px;
    background:#b4282d;
    margin:0 auto;

    span{
      display: block;
      text-align: center;
      color: #fff;
      font-size:14px;
      height:50px;
      line-height:50px;
    }
  }
}
</style>
