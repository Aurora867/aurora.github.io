<script setup>
import {reactive} from "vue";

const time = reactive({
  timeStamp: '',
  currentTime: ''
})

// 将Unix时间戳转换为时间
function UnixToCurr(timeStamp) {
  return new Date(timeStamp * 1000).toLocaleString();
}

// 将时间转换为Unix时间戳
function CurrToUnix(CurrTime) {
  return Date.parse(CurrTime) / 1000;
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <div class="main">
          <div class="top" style="display: flex;height: auto">
            <img src="../../assets/img/time.png" alt="图片" class="box">
            <span class="explain">Unix时间戳和北京时间的互相转化</span>
          </div>
          <el-form
              label-width="100px" style="max-width: 600px;max-height: 30px">
            <el-form-item label="Unix时间戳">
              <el-input v-model="time.timeStamp" @input="time.currentTime = UnixToCurr(time.timeStamp)"/>
            </el-form-item>
            <el-form-item label="北京时间">
              <el-input v-model="time.currentTime" @input="time.timeStamp = CurrToUnix(time.currentTime)"/>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped>

.el-main {
  height: 70%;
  background-color: #f4f8fb;
}

.el-header {
  height: 15%;
  background-color: #f4f8fb;
  margin: 0 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.box {
  height: 100px;
  width: 130px;
  margin-left: 20px;
  margin-top: 20px;
}

.main {
  height: 400px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}

.explain {
  font-family: "微软雅黑 Light", sans-serif;
  font-size: 20px;
  color: #333;
  margin-left: 30px;
  margin-top: 50px;
  height: 100px;
  width: 100%;
}
</style>