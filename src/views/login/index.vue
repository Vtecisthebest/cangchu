<template>
  <div class="divLogin">
    <div class="divContent">
      <div class="divLeft">
        <div class="divTitle">
          <img src="@/assets/logintitle.png" alt="" />
        </div>
        <el-form
          ref="loginRormRef"
          :model="loginRorm"
          :rules="loginRormRules"
          label-width="80px"
        >
          <el-row type="flex" justify="center">
            <el-col :span="24">
              <el-form-item prop="name">
                <el-input v-model="loginRorm.name" placeholder="请输入账号">
                  <template slot="prepend">
                    <i class="el-icon-mobile" />
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <el-form-item prop="password">
                <el-input
                  v-model="loginRorm.password"
                  show-password
                  type="password"
                  placeholder="请输入密码"
                >
                  <template slot="prepend">
                    <i class="el-icon-lock" />
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center">
            <el-col :span="13">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center">
            <el-col :span="13">
              <el-button :loading="loading" @click.prevent="submitBtn"
                >立即登录</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="divRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginRorm: {
        name: 'admin',
        password: 123456
      },
      loginRormRules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入活动密码', trigger: 'blur' }
        ]
      },
      checked: true,
      loading: false
    }
  },
  methods: {
    async submitBtn() {
      try {
        await this.$refs.loginRormRef.validate()
        // console.log(this.$refs.loginRormRef)
        this.loading = false
        this.$router.push('/')
        this.$message.success('登陆成功')
      } catch (e) {
        console.log(e)
        this.loading = false
        this.$message.error('登陆失败请重试')
      }
    }
  }
}
</script>

<style scoped lang="less">
::v-deep .el-input {
  width: 100%;
  margin: 15px 0;
}
.divLogin {
  background: #fdfafa;
  .divContent {
    width: 958px;
    height: 516px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    background-color: #fff;
    border-radius: 40px;
    .divLeft {
      padding-right: 45px !important;
      float: left;
      width: 360px;
      height: 516px;
      background: #fff;
      border-radius: 34px 0 0 34px;
      margin: 0 auto;
      .divTitle {
        margin-bottom: 40px;
        margin-left: 124px;
        margin-top: 72px;
        img {
          width: 150px;
          height: 64px;
        }
      }
    }

    .divRight {
      float: right;
      background-image: url(~@/assets/contentBg.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      width: 560px;
      height: 516px;
      position: absolute;
      right: 0;
    }

    .el-button {
      margin-top: 20px;
      width: 280px;
      height: 50px;
      background: #ffb200;
      border-radius: 8px;
      box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
      font-size: 16px;
      font-weight: 550;
      text-align: center;
      color: #332929;
      line-height: 22px;
    }
  }
}
</style>
