<template>
  <div class="app">
    <van-nav-bar title="网易严选">
      <van-icon name="search" slot="right"/>
      <van-icon name="wap-home" @click="fn1" slot="left"/>
      <van-icon name="shopping-cart-o" @click="fn" slot="right"/>
    </van-nav-bar>
    <div class="main">
      <div class="banner">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt>
      </div>
      <!-- 表单块 -->
      <div class="phone">
        <van-cell-group>
          <van-field
            v-model="message"
            required
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('question')"
          />
          <van-field type="password" placeholder="请输入密码" required/>
        </van-cell-group>
        <van-row>
          <van-col span="5" class="problem">遇到问题 ?</van-col>
          <van-col span="10" offset="8" class="verification">使用密码验证登录</van-col>
        </van-row>
      </div>
      <!-- 登录块 -->
      <div class="login">
        <router-link tag="div" to="/fucenter" class="login-p">
          <span>
            <van-icon/>登录
          </span>
        </router-link>
        <router-link tag="div" to="/email" class="login-e">
          <span>
            <van-icon/>其他方式登录
          </span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 0
    }
  },
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

    .banner {
      height: 140px;
      margin: 0 auto;
      padding-top: 20px;
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
