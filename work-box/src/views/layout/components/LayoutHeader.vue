<script setup>
import {reactive} from "vue";

const header = reactive({
  title: '一个非常Nice的在线工具箱',
  p: '  目前功能正在完善中…… 如果觉得某款工具好用可以安利给他人使用哦！在使用过程中遇到任何问题或者建议都可以留言'
});
</script>

<template>
  <el-row style="background-color: #f4f8fb; height: 17%">
    <el-col :span="6">
      <img src="../../../assets/img/box.png" alt="图片" class="box">
      <el-text class="mx-1" type="info" size="large" tag="b">{{ header.title }}</el-text>
    </el-col>

    <el-col :span="15" class="center-content">
      <div class="title">
        <h2 style="height:30px;margin-bottom:10px"> 欢迎使用枫叶百宝箱</h2>
        <el-text class="mx-1" type="primary">{{ header.p }}</el-text>
      </div>
    </el-col>

    <el-col :span="3">
    </el-col>

  </el-row>
</template>

<style scoped>
.box {
  height: 100px;
  width: 100px;
  vertical-align: middle;
}


.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  height: 100px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.title {
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 30px;
}


</style>