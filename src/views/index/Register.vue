<template>
  <div class="register">
    <van-nav-bar title="网易严选">
      <van-icon name="search" slot="right" style="margin-right:10px"/>
      <van-icon name="wap-home" @click="fn1" slot="left" style="top:-36px"/>
      <van-icon name="shopping-cart-o" @click="fn" slot="right"/>
    </van-nav-bar>
    <div class="main">
      <div class="banner">

        <span>手机号注册</span>
      </div>
      <div class="phone">
        <van-cell-group>
          <van-field
            required
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('question')"
          />
          <van-cell-group>
            <van-field label="短信验证码" placeholder="请输入短信验证码">
              <van-button slot="button" size="small" type="primary" class="send-v">发送验证码</van-button>
            </van-field>
          </van-cell-group>
          <van-field type="password" placeholder="请输入密码" required/>
        </van-cell-group>
        <van-row>
          <van-col span="6" class="problem">遇到问题 ?</van-col>
          <van-col span="9" offset="8" class="verification">使用密码验证登录</van-col>
        </van-row>
      </div>
      <div class="login">
        <router-link tag="div" to="/fucenter" class="login-p">
          <span>
            <van-icon/>注册
          </span>

        </router-link>
        <van-checkbox checked-color="#07c160" v-model="fast" class="agree"  >我同意《服务条款》和《网易隐私政策》</van-checkbox>
        <router-link tag="div" to="/register" class="login-reg">
          <span>
            邮箱账号注册
            <van-icon name="arrow"/>
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
      fast: true
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
// .van-nav-bar {
//   .van-icon {
//     font-size:24px;
//     color: gray;
//     font-weight: bolder;
//   }
// }

.register {
  .main {
    height:100%;
    background: #ffffff;
    padding-bottom: 150px;
    .banner {
      height: 140px;
      margin: 0 auto;
      padding-top: 20px;
      box-sizing: border-box;
      span{
        display: block;
        text-align: center;
        font-size:18px;
      }
    }
    .phone {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      .van-cell {
        border-bottom: 1px solid #eee;

      }
      .send-v{
        border:1px solid rgb(141, 131, 131);
        border-radius: 5px;
      }
      .problem {
        font-size: 14px;
        color: rgb(138, 128, 128);
        margin-left: 12px;
      }
      .verification {
        font-size: 14px;
        color: rgb(138, 128, 128);
      }
      .van-cell--required::before {
        display: none;
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
      .agree{
        font-size:14px;
        margin-left:20px;
      }
    }
    .other {
      display: block;
      margin-top: 200px;
    }
  }
}
</style>
