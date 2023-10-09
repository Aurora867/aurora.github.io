<script setup>
import {ref} from "vue";

const inputStr = ref('')
const formatStr = ref('')
const format = () => {
  const jsonObj = JSON.parse(inputStr.value)
  formatStr.value = JSON.stringify(jsonObj, null, 4);
  console.log(formatStr)
}
</script>

<template>
  <div id="contain">
    <div id="main">
      <p>请输入 JSON 字符串：</p>
      <textarea id="show" v-model="inputStr"></textarea>
      <el-button type="success" @click="format">格式化</el-button>
      <p>格式化后的 JSON 字符串：</p>
      <pre id="show" style="height: auto; min-height:200px;line-height: 20px;">{{ formatStr }}</pre>
    </div>
  </div>
</template>

<style scoped>
#contain {
  background-color: #f4f8fb;
  height: 100%;
  width: 100%;
  padding-top: 20px;
}

#main {
  width: 1000px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}

#show {
  width: 100%;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid;
}
</style>