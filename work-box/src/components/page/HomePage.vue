<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";

const header = reactive({
  title: '涵盖近百种工具',
  p: '  目前功能正在完善中…… 如果觉得某款工具好用可以安利给他人使用哦！在使用过程中遇到任何问题或者建议都可以留言'
});

const router = useRouter();

function timeStampChange() {
  console.log('跳转到时间戳页面')
  router.push('/timeStampChange')
}

function jsonFormat() {
  console.log('跳转到json格式化界面')
  router.push('/jsonFormat')
}

</script>
<template>
  <el-row style="background-color: #f4f8fb; height: 17%">
    <el-col :span="6">
      <img src="src/assets/box.png" alt="图片" class="box">
      <el-text class="mx-1" type="info" size="large" tag="b">{{ header.title }}</el-text>
    </el-col>
    <el-col :span="15" class="center-content">
      <div class="title">
        <h2 style="height:30px;margin-bottom:10px"> 欢迎使用枫叶百宝箱</h2>
        <el-text class="mx-1" type="primary">{{ header.p }}</el-text>
      </div>
      <div class="grid-content ep-bg-purple-dark"/>
    </el-col>
    <el-col :span="3">
    </el-col>
  </el-row>

  <el-row style="background-color: #f4f8fb;padding: 20px">
    <el-col :span="5" class="option">
      <img src="src/assets/time.png" alt="图片" style="height: 100px;width: 120px;margin-bottom: 10px">
      <br>
      <el-text class="mx-1" type="primary" size="large">UNIX时间戳转化为北京时间</el-text>
      <el-button type="info" size="small" @click="timeStampChange">进入</el-button>
    </el-col>
    <el-col :span="5" class="option">
      <img src="src/assets/json.png" alt="图片" style="height: 100px;width: 200px;margin-bottom: 10px">
      <br>
      <el-text class="mx-1" type="primary" size="large">JSON格式美化</el-text>
      <el-button type="info" size="small"  @click="jsonFormat">进入</el-button>
    </el-col>
    <el-col :span="5 " class="option">
    </el-col>
    <el-col :span="5" class="option">

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

.option {
  height: 200px;
  background-color: #f4f4f4;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 25px;
  border-radius: 20px;
}

.el-button {
  margin-top: 10px;
}

</style>