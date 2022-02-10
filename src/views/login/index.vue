<!--
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-08 18:20:26
 * @Description: 登录页面
-->
<template>
    <div class="login-container">
        <el-form class="login-form">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <!-- username -->
            <el-form-item>
                <span class="svg-container">
                    <el-icon>
                        <avatar></avatar>
                    </el-icon>
                </span>
                <el-input placeholder="username" name="username" type="text"></el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item>
                <span class="svg-container">
                    <el-icon>
                        <avatar></avatar>
                    </el-icon>
                </span>
                <el-input placeholder="password" name="password"></el-input>
                <span class="show-pwd">
                    <el-icon>
                        <avatar></avatar>
                    </el-icon>
                </span>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-button type="primary" style="width:100%;margin-bottom:30px;">登陆</el-button>
        </el-form>
    </div>
</template>
<script setup>
//倒入的组件可以直接用，不需要在注册
import { Avatar } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    //   为什么都要设置 relative
    position: relative;
    width: 520px;
    //padding
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        // background: red;
        border: none;
        border-radius: 0px;
        padding: 12px 15px 12px 15px;
        color: $light_gray;
        cursor: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle; //对齐方式
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
