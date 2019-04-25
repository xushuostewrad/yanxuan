<template>
  <div class="app">
    <van-nav-bar title="网易严选">
      <van-icon name="search" slot="right"/>
      <van-icon name="wap-home" @click="fn1" slot="left" style="top:-36px"/>
      <van-icon name="shopping-cart-o" @click="fn" slot="right"/>
    </van-nav-bar>
    <div class="main">
      <div class="banner">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt>
      </div>
      <div class="login">
        <router-link tag="div" to="/fucenter" class="login-p">
          <span>
            <van-icon name="graphic"/>手机号码登录
          </span>
        </router-link>
        <router-link tag="div" to="/email" class="login-e">
          <span>
            <van-icon name="card"/>邮箱账号登录
          </span>
        </router-link>
        <router-link tag="div" to="/register" class="login-reg">
          <span>
            手机快捷注册
            <van-icon name="arrow"/>
          </span>
        </router-link>
      </div>
      <div class="other">
        <van-row type="flex" justify="center">
          <van-col span="6">
            <van-icon name="chat"/>微信
          </van-col>
          <van-col span="6">
            <van-icon name="manager-o"/>QQ
          </van-col>
          <van-col span="6">
            <van-icon name="chat-o"/>微信
          </van-col>
        </van-row>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    fn: function () {
      location.href = '/#/shop'
    },
    fn1: function () {
      location.href = '/#/homepage'
    }
  }
}
</script>

<style lang="less">
.van-nav-bar .van-icon {
  font-size: 24px;
  color: gray;
}

.app {
  .main {
    height: 620px;
    background: #eee;
    .banner {
      height: 204px;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      img {
        display: block;
        height: 45px;
        width: 133px;
        margin: 0 auto;
      }
    }
    .login {
      height: 146px;
      margin: 0 auto;
      &-p {
        height: 46px;
        width: 335px;
        background: #b4282d;
        margin: 0 auto;
        margin-bottom: 20px;
        span {
          display: block;
          font-size: 18px;
          color: #fff;
          height: 46px;
          line-height: 46px;
          text-align: center;
          .van-icon {
            margin-right: 10px;
          }
        }
      }
      &-e {
        height: 46px;
        width: 335px;
        border: 1px solid red;
        margin: 0 auto;
        margin-bottom: 10px;
        span {
          display: block;
          font-size: 18px;
          color: red;
          height: 46px;
          line-height: 46px;
          text-align: center;
          .van-icon {
            margin-right: 10px;
          }
        }
      }
      &-reg {
        height: 16px;
        width: 335px;
        margin: 0 auto;
        span {
          display: block;
          font-size: 16px;
          color: rgb(141, 131, 131);
          height: 46px;
          line-height: 46px;
          text-align: center;
          .van-icon {
            margin-right: 10px;
          }
        }
      }
    }
    .other {
      display: block;
      margin-top: 200px;
    }
  }
}
</style>
