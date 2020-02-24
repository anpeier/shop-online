<template>
  <div class="container">
    <Row>
      <i-col span="12" offset="2" class="signup-img-box">
        <img src="/static/img/signup.jpg" alt />
      </i-col>
      <i-col span="8">
        <div class="sign-up-title">
          <h1>欢迎注册账号</h1>
          <br />
          <h2>BIT MALL 天天低价保证，让消费者钱更值钱</h2>
          <div class="sign-up-step-box">
            <Steps :current="signUpSteps">
              <Step title="验证手机号" icon="ios-call"></Step>
              <Step title="填写账号信息" icon="ios-brush"></Step>
              <Step title="注册成功" icon="ios-checkmark-circle-outline"></Step>
            </Steps>
            <div class="sign-up-box">
              <!-- 根据路由显示 -->
              <router-view />
            </div>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signUpSteps: 0
    };
  }
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  height: 500px;
  overflow: hidden;
}
.signup-img-box {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  box-sizing: border-box;
}
.signup-img-box > img {
  height: 100%;
  max-width: 80%;
}
.sign-up-title {
  width: 430px;
  margin: 15px auto;
  height: 80px;
}
.sign-up-step-box{
    margin: 15px auto;
    padding-left: 30px;
    padding-top: 30px;
    width: 430px;
    height: 370px;
    border: 1px solid #495060
}
.sign-up-box {
    margin: 30px 25px;
    width: 350px;
    display: flex;
    align-items: center;
}
</style>