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
}
</style>
